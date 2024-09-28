import { createLazyFileRoute } from "@tanstack/react-router";
import GenerateReports from "../pages/generateReports";

export const Route = createLazyFileRoute("/_auth/generateReports")({
  component: () => (
    <div>
      <GenerateReports />
    </div>
  ),
});
