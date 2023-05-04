import { X } from "./var";

const customers_url: string =
  "https://traineeapp.azurewebsites.net/api/customers";

type Customer = {
  firstname: string | null;
  lastname: string | null;
  streetaddress: string | null;
  postcode: string | null;
  city: string | null;
  phone: string | null;
  email: string | null;
  link_self?: string | null;
};

const emptyCustomer: Customer = {
  firstname: null,
  lastname: null,
  streetaddress: null,
  postcode: null,
  city: null,
  phone: null,
  email: null,
};

const validate = (c: Customer): boolean => !Object.values(c).some((v) => !v);

const alertMessage = "Fill in all the required information, please.";

const getCustomers = (arr: any): Customer[] => {
  return arr.map((o: any) => {
    return {
      firstname: o.firstname,
      lastname: o.lastname,
      streetaddress: o.streetaddress,
      postcode: o.postcode,
      city: o.city,
      phone: o.phone,
      email: o.email,
      link_self: o.links[0].href,
    };
  });
};

const gridRW: number = (X * 0.95) / 7;

const columns: object[] = [
  {
    headerName: "Firstname",
    width: gridRW,
    field: "firstname",
  },
  {
    headerName: "Lastname",
    width: gridRW,
    field: "lastname",
  },
  {
    headerName: "Streetaddress",
    width: gridRW,
    field: "streetaddress",
  },
  {
    headerName: "Postcode",
    width: gridRW,
    field: "postcode",
  },
  {
    headerName: "City",
    width: gridRW,
    field: "city",
  },
  {
    headerName: "Phone",
    width: gridRW,
    field: "phone",
  },
  {
    headerName: "Email",
    width: gridRW,
    field: "email",
  },
];

const defColDef: object = {
  sortable: true,
  filter: true,
  floatingFilter: true,
};

export {
  customers_url,
  emptyCustomer,
  validate,
  alertMessage,
  getCustomers,
  columns,
  defColDef,
};

export type { Customer };
