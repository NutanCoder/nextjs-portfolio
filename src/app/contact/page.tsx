import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export const metadata = {
  title: "Contact | Nutan",
  description:
    "Get in touch with Nutan for frontend development roles, freelance projects, or collaborations. Let's connect!",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Feel free to reach out for collaboration or just say hi!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              nutansingh159@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              Gurgaon, India
            </div>
            <div className="pt-6">
              <h4 className="text-base font-semibold mb-2">Let's connect:</h4>
              <div className="flex gap-4">
                <a href="https://github.com/NutanCoder" target="_blank">
                  <SiGithub className="w-6 h-6 text-black-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nutan-singh-484018194/"
                  target="_blank"
                >
                  <SiLinkedin className="w-6 h-6 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
