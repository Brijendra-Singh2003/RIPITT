import { Avatar, Card, CardContent, CardHeader } from "@mui/material";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        About RIPITT Foundation
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          The RIPITT Foundation is dedicated to empowering communities through
          innovative technology solutions and education, fostering sustainable
          development and bridging the digital divide.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg">
          We envision a world where technology is a catalyst for positive
          change, enabling individuals and communities to thrive in the digital
          age, regardless of their background or location.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Objectives</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Provide access to cutting-edge technology and digital resources in
            underserved areas
          </li>
          <li>
            Develop and implement educational programs to enhance digital
            literacy and skills
          </li>
          <li>
            Foster innovation and entrepreneurship through technology-driven
            initiatives
          </li>
          <li>
            Collaborate with local and global partners to create sustainable
            tech solutions
          </li>
          <li>
            Advocate for policies that promote digital inclusion and equitable
            access to technology
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Organizational Structure
        </h2>
        <p className="text-lg mb-4">
          The RIPITT Foundation operates under a dynamic and efficient
          organizational structure, led by our visionary CEO and supported by a
          diverse and experienced Board of Directors.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Message from the CEO</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/logo.png"
            alt="CEO of RIPITT Foundation"
            className="rounded-full size-72"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-lg italic mb-4">
              "At RIPITT Foundation, we believe in the transformative power of
              technology. Our mission is to harness this power to create
              opportunities, foster innovation, and build a more inclusive
              digital future for all. Together, we can make a lasting impact on
              communities around the world."
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Board of Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "John Smith",
              role: "Chairperson",
              bio: "Tech industry veteran with 20+ years of experience",
            },
            {
              name: "Emily Johnson",
              role: "Vice Chairperson",
              bio: "Social entrepreneur and community advocate",
            },
            {
              name: "Michael Lee",
              role: "Treasurer",
              bio: "Financial expert specializing in non-profit management",
            },
            {
              name: "Sarah Williams",
              role: "Secretary",
              bio: "Education policy specialist and former teacher",
            },
            {
              name: "David Brown",
              role: "Member",
              bio: "Renowned AI researcher and university professor",
            },
            {
              name: "Lisa Chen",
              role: "Member",
              bio: "Sustainability consultant and environmental activist",
            },
          ].map((director, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar>
                    {director.name.substring(0,2)}
                </Avatar>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">
                  {director.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-center">{director.role}</p>
                <p className="text-sm text-center mt-2">{director.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
