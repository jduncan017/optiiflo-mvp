import { notFound } from "next/navigation";
import { individuals } from "~/lib/individualsData";
import ContactOverview from "~/components/contacts/ContactOverview";
type Props = {
  params: {
    individualId: string;
  };
};

function getIndividualById(id: string) {
  return individuals.find((individual) => individual.id === id);
}

export default function ContactPage({ params }: Props) {
  const individual = getIndividualById(params.individualId);

  if (!individual) {
    notFound();
  }

  return <ContactOverview contact={individual} />;
}

// Generate static paths for all contacts
export async function generateStaticParams() {
  return individuals.map((individual) => ({
    individualId: individual.id,
  }));
}
