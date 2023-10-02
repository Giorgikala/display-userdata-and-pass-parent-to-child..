export interface UserData {
  name?: string;
  status?: boolean;
  email?: string;
  address: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: number;
  };
}
