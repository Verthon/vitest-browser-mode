import { Card } from "@/design-system/card/Card";
import { Link } from "@tanstack/react-router";

export const HomePage = () => {
	const greeting = "hey";

	return (
		<Card className="max-w-md mx-auto mt-12 text-center">
			<h1 className="text-2xl font-bold">{greeting}</h1>
			<p className="text-muted mt-2">
				Welcome to the Medical Appointment Scheduler
			</p>
			<Link to="/book-appointment" search={{ step: 1 }}>
				Book an appointment
			</Link>
		</Card>
	);
};
