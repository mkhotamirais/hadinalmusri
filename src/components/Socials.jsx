import { InstagramLia, TiktokLia, YoutubeLia } from "./SocialIcons";

const socialsList = [
  { href: "https://www.youtube.com/@HadinAl-MusriKatomas", icon: <YoutubeLia />, title: "youtube hadinalmusri" },
  {
    href: "https://www.instagram.com/hadinalmusrikatomas?igshid=YmMyMTA2M2Y%3D",
    icon: <InstagramLia />,
    title: "instagram hadinalmusri",
  },
  { href: "https://www.tiktok.com/@hadinalmusrikatomas", icon: <TiktokLia />, title: "tiktok hadinalmusri" },
];

const Socials = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex gap-3 p-2`}>
        {socialsList.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 sm:w-7 hover:scale-110 transition-all duration-100"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
Socials.propTypes;

export default Socials;
