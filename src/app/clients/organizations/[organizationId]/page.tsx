import { notFound } from "next/navigation";
import { organizations } from "~/lib/organizationsData";
import ContactOverview from "~/components/contacts/ContactOverview";

type Props = {
  params: {
    organizationId: string;
  };
};

function getOrganizationById(id: string) {
  return organizations.find((org) => org.id === id);
}

export default function OrganizationPage({ params }: Props) {
  const organization = getOrganizationById(params.organizationId);

  if (!organization) {
    notFound();
  }

  return <ContactOverview contact={organization} />;
}

// Generate static paths for all organizations
export async function generateStaticParams() {
  return organizations.map((org) => ({
    organizationId: org.id,
  }));
}
