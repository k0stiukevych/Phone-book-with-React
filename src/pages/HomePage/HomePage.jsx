import PageTitle from "../../components/PageTitle/PageTitle"

export default function HomePage() {
    return (
      <PageTitle>
        Welcome to your PhoneBook{" "}
        <span role="img" aria-label="Greeting icon">
          👋
        </span>
      </PageTitle>
    );
}