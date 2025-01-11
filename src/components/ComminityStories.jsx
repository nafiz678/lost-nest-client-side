import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
    {
      name: "Emily R.",
      username: "@emilyr",
      body: "I never thought I'd see my dog again after he ran away. Thanks to My Lost Nest, a kind stranger helped us reunite!",
      img: "https://cdn.lifestance.com/wp-content/uploads/2024/01/26034252/Emely-Wyman-LifeStance-.jpg",
    },
    {
      name: "Michael T.",
      username: "@michaelt",
      body: "I lost my wedding ring during a hike and posted about it here. A week later, someone found it and returned it to me!",
      img: "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/3/5/1/1432351_michaellynchneom_848331.jpg",
    },
    {
      name: "Linda K.",
      username: "@lindak",
      body: "A heartfelt thank you to this amazing community. They helped me find my son's favorite toy, which we thought was gone forever.",
      img: "https://i.pinimg.com/236x/c8/92/0e/c8920ecabb310ad279fb496193d56376.jpg",
    },
    {
      name: "David P.",
      username: "@davidp",
      body: "This platform is amazing! I was able to locate my lost phone with the help of a fellow user who found it in a park.",
      img: "https://trombino.clermont-filmfest.org/wp-content/uploads/2018/02/David-SIMON-Education-%C3%A0-limage-Ciclic.jpg",
    },
    {
      name: "Sophia M.",
      username: "@sophiam",
      body: "I found a wallet on the subway and listed it here. The owner contacted me, and we arranged to meet and return it.",
      img: "https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2farizona.sidearmsports.com%2fimages%2f2022%2f10%2f24%2fSophia_Atchison_221005_TF_Roster_Headshots_Mike_Christy_58.JPG&type=webp",
    },
  ];


const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-9 h-9 object-cover" width="38" height="38" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function CommunityStories() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
export default CommunityStories
