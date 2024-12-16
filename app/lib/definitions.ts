export type InvoiceStatus = "pending" | "paid";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string | null; // Manejo de valores nulos
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number; // Almacenado en centavos
  date: string; // Fecha en formato "YYYY-MM-DD"
  status: InvoiceStatus;
};

export type Revenue = {
  month: string; // Mes del ingreso en formato "YYYY-MM"
  revenue: number; // Ingresos totales en la moneda local
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string | null;
  email: string;
  amount: string; // Formateado como moneda (por ejemplo, "$1,000.00")
};

export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number; // Almacenado en centavos antes de formatear
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string | null; // Manejo de valores nulos
  date: string;
  amount: number; // Almacenado en centavos
  status: InvoiceStatus;
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string | null;
  total_invoices: number;
  total_pending: number; // Almacenado en centavos
  total_paid: number; // Almacenado en centavos
};

export type FormattedCustomersTable = Omit<
  CustomersTableType,
  "total_pending" | "total_paid"
> & {
  total_pending: string; // Formateado como moneda
  total_paid: string; // Formateado como moneda
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = Omit<Invoice, "date">; // Derivado de Invoice, sin la fecha
