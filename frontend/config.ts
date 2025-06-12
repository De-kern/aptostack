import Placeholder1 from "@/assets/placeholders/Aptosteck_de_01.jpg";
import Placeholder2 from "@/assets/placeholders/Aptosteck_de_02.jpg";
import Placeholder3 from "@/assets/placeholders/Aptosteck_de_03.jpg";
import Placeholder4 from "@/assets/placeholders/Aptosteck_de_04.jpg";
import Placeholder5 from "@/assets/placeholders/Aptosteck_de_05.jpg";
import Placeholder6 from "@/assets/placeholders/Aptosteck_de_06.jpg";
import Placeholder7 from "@/assets/placeholders/Aptosteck_de_07.jpg";
import Placeholder8 from "@/assets/placeholders/Aptosteck_de_08.jpg";
import Placeholder9 from "@/assets/placeholders/Aptosteck_de_09.jpg";
import Placeholder10 from "@/assets/placeholders/Aptosteck_de_10.jpg";
import Placeholder11 from "@/assets/placeholders/Aptosteck_de_11.jpg";
import Placeholder12 from "@/assets/placeholders/Aptosteck_de_12.jpg";
import Placeholder13 from "@/assets/placeholders/Aptosteck_de_13.jpg";


import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "Aptostacke",
    description: "#PACT #AIRDROP",
    image: Placeholder1,
  },

  ourStory: {
    title: "Aptostack",
    subTitle: "Proin lorem",
    description:
      "A group of diverse individuals, each representing a different emotion, gathered around a large PACT contract, their expressions ranging from fear to excitement as they prepare to sign. #PACT #AIRDROP",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13],
  },

  ourTeam: {
    title: "Aptostack",
    members: [
      {
        name: "#Aptostack_01",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
      {
        name: "#Aptostack_01",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_02",
        role: "Aliquip Esse",
        img: Placeholder2,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_03",
        role: "Aliquip Esse",
        img: Placeholder3,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_04",
        role: "Aliquip Esse",
        img: Placeholder4,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_05",
        role: "Aliquip Esse",
        img: Placeholder5,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_06",
        role: "Aliquip Esse",
        img: Placeholder6,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_07",
        role: "Aliquip Esse",
        img: Placeholder7,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_08",
        role: "Aliquip Esse",
        img: Placeholder8,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_09",
        role: "Aliquip Esse",
        img: Placeholder9,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_10",
        role: "Aliquip Esse",
        img: Placeholder10,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_11",
        role: "Aliquip Esse",
        img: Placeholder11,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "#Aptostack_12",
        role: "Aliquip Esse",
        img: Placeholder12,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "#Aptostack_13",
        role: "Aliquip Esse",
        img: Placeholder13,
        socials: {
          twitter: "https://twitter.com",
        },
      },
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "Aprostack",
        description:
          "A group of diverse individuals, each representing a different emotion, gathered around a large PACT contract, their expressions ranging from fear to excitement as they prepare to sign. #PACT #AIRDROP",
      },
    
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
