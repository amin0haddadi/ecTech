import OrderTemplate from "@/components/OrderTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه سفارش"
};

const OrdersPage = () => {
  return <OrderTemplate />;
};

export default OrdersPage;
