import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { Select, SelectItem } from "@nextui-org/react";
import toast from "react-hot-toast";

interface Quiz {
  name: string;
  score: number;
  color: string; // Color property for each subject
}

interface ReportCardProps {
  studentName: string;
  quizzes: Quiz[];
}

const ReportCard: React.FC<ReportCardProps> = ({ studentName, quizzes }) => {
  const chartRef = useRef<any>(null);
  const lineChartRef = useRef<any>(null);

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.setFont("helvetica", "normal");

    // Adding Title
    pdf.setFontSize(20); // Reduced font size
    pdf.text("Student Report Card", 10, 20); // Adjusted margin

    // Adding Student Name
    pdf.setFontSize(16); // Reduced font size
    pdf.text(`Student Name: ${studentName}`, 10, 30); // Adjusted margin

    // Adding Quizzes Information
    pdf.setFontSize(14); // Reduced font size
    pdf.text("Exciting Quizzes:", 10, 40); // Adjusted margin

    quizzes.forEach((quiz, index) => {
      pdf.setFontSize(12); // Smaller font size for quiz items
      pdf.text(
        `${index + 1}. ${quiz.name}: ${quiz.score}`,
        10,
        50 + index * 10
      ); // Adjusted margin
    });

    // Adding Bar Graph
    const barCanvas = chartRef.current?.canvas; // Accessing the canvas for the bar chart
    if (barCanvas) {
      const imgData = barCanvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 90, 190, 50); // Adjust size for PDF
    }

    // Adding Line Graph
    const lineCanvas = lineChartRef.current?.canvas; // Accessing the canvas for the line chart
    if (lineCanvas) {
      const lineImgData = lineCanvas.toDataURL("image/png");
      pdf.addImage(lineImgData, "PNG", 10, 150, 190, 50); // Adjust size for PDF
    }

    // Adding Footer
    pdf.setFontSize(10); // Smaller font size for footer
    pdf.text(
      "Generated on: " + new Date().toLocaleDateString(),
      10,
      pdf.internal.pageSize.getHeight() - 15
    );

    pdf.save(`${studentName}.pdf`);
  };

  const barData = {
    labels: quizzes.map((quiz) => quiz.name),
    datasets: [
      {
        label: "Performance Growth",
        data: quizzes.map((quiz) => quiz.score),
        backgroundColor: quizzes.map((quiz) => quiz.color), // Using different colors for each subject
      },
    ],
  };

  // Dummy data for line graph representing growth over time
  const lineData = {
    labels: quizzes.map((quiz) => quiz.name),
    datasets: [
      {
        label: "Growth Over Time",
        data: quizzes.map(
          (quiz) => quiz.score + Math.floor(Math.random() * 10) - 5
        ), // Random growth data
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div>
        <h2>Student Report Card</h2>
        <h3>{studentName}</h3> {/* Display student name */}
        <div style={{ height: "300px", width: "100%" }}>
          <Bar
            data={barData}
            ref={chartRef}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
        <div style={{ height: "300px", width: "100%", marginTop: "20px" }}>
          <Line
            data={lineData}
            ref={lineChartRef}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
        <button onClick={generatePDF} style={buttonStyle2}>
          Download Report Card
        </button>
      </div>
    </>
  );
};

// Styles for buttons
const buttonStyle: React.CSSProperties = {
  backgroundColor: "#f54646",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "20px",
};

const buttonStyle2: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "20px",
};

const GenerateReports: React.FC = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [selectedStudents, setSelectedStudents] = React.useState<string>("");

  console.log(selectedStudents);

  // Dummy quiz data with colors for each subject
  const quizzes: Quiz[] = [
    { name: "Math Quiz", score: 85, color: "rgba(255, 99, 132, 0.6)" }, // Red
    { name: "Science Quiz", score: 92, color: "rgba(54, 162, 235, 0.6)" }, // Blue
    { name: "History Quiz", score: 78, color: "rgba(255, 206, 86, 0.6)" }, // Yellow
    { name: "Literature Quiz", score: 88, color: "rgba(75, 192, 192, 0.6)" }, // Teal
    { name: "Geography Quiz", score: 95, color: "rgba(153, 102, 255, 0.6)" }, // Purple
  ];
  const studentNames = [
    "Aarav Patel",
    "Diya Sharma",
    "Vihaan Gupta",
    "Saanvi Reddy",
    "Aadhya Singh",
    "Arjun Mehta",
    "Isha Desai",
    "Reyansh Verma",
    "Ananya Joshi",
    "Krishna Nair",
  ];

  const handleGenerate = () => {
    if (!selectedStudents) {
      toast.error("Please Select a student first.", {
        position: "bottom-right",
      });
    } else {
      setShowPopup(true);
    }
  };

  return (
    <>
      <div>
        <Select
          label="Select a Student"
          className="max-w-full pt-8 text-1xl"
          color="success"
          onChange={(e) => setSelectedStudents(e.target.value)}
        >
          {studentNames.map((animal) => (
            <SelectItem key={animal}>{animal}</SelectItem>
          ))}
        </Select>
      </div>
      <div>
        {!showPopup && (
          <button onClick={handleGenerate} style={buttonStyle2}>
            Generate Report Card
          </button>
        )}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <ReportCard studentName={selectedStudents} quizzes={quizzes} />{" "}
              {/* Pass dummy student name */}
              <button onClick={() => setShowPopup(false)} style={buttonStyle}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GenerateReports;
