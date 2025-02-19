export type Individual = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  priority: "High" | "Medium" | "Low";
  organization: string;
  archived: boolean;
  profilePicture: string;
  createdAt: string;
};

export type Organization = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  members: Individual[];
  archived: boolean;
  logo: string;
  priority: "High" | "Medium" | "Low";
  website: string;
  createdAt: string;
};

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  // Add any other contact fields you need
}
