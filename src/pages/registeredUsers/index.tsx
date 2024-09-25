import { Key, useCallback } from "react";
import { currenciesMarketTableInfo } from "../../mock/currencieMarketInfo";
import MainTable from "../../components/Modules/Table/MainTable";
import { currenyMarketsProps } from "../../interfaces/currenyMarkerts.interface";
import convertTimestampsToDate from "../../utils/convertTimestampsToDate";
import {
  Avatar,
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import VerticalDotsIcon from "../../assets/icons/fill/VerticalDots";
import { useTranslation } from "react-i18next";
import getDirectionByLanguage from "../../utils/getDirectionByLanguage";

const columns = [
  { name: "ID", uid: "id" },
  { name: "Name", uid: "name" },
  { name: "Class", uid: "class" },
  { name: "DOB", uid: "DOB" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

const initialVisibleColumns = ["name", "class", "DOB", "status", "actions"];

const statusColorMap: {
  paid: "success";
  overdue: "danger";
  [key: string]: "success" | "danger";
} = {
  paid: "success",
  overdue: "danger",
};

export default function RegisteredUsers() {
  const { t, i18n } = useTranslation();

  const renderCell = useCallback(
    (item: currenyMarketsProps, columnKey: Key) => {
      const cellValue = item[columnKey as keyof currenyMarketsProps];

      switch (columnKey) {
        case "name":
          return (
            <div className="flex items-center gap-4">
              <Avatar src={item.profile} />
              <p>{item.name}</p>
            </div>
          );
        case "class":
          return <p>{item.class}</p>;
        case "DOB":
          return <p>{convertTimestampsToDate(item.DOB)}</p>;
        case "status":
          return (
            <Chip
              className="capitalize"
              color={
                statusColorMap[item.status == "active" ? "paid" : "overdue"]
              }
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu dir={getDirectionByLanguage(i18n.language)}>
                  <DropdownItem>{t("view")}</DropdownItem>
                  <DropdownItem>{t("edit")}</DropdownItem>
                  <DropdownItem>{t("delete")}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <div className="pt-[3%]">
      <MainTable
        columns={columns}
        initialVisibleColumns={initialVisibleColumns}
        data={currenciesMarketTableInfo()}
        renderCell={renderCell}
      />
    </div>
  );
}
