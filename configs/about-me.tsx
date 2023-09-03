export const aboutItems = [
  {
    label: "personal-info",
    items: [
      {
        label: "bio",
        href: "bio",
        icon: "ri-folder-fill text-[18px] text-[#E99287]",
      },
      {
        label: "my-works",
        href: "my-works",
        icon: "ri-folder-fill text-[18px] text-[#43D9AD]",
      },
      {
        label: "my-networks",
        href: "my-networks",
        icon: "ri-folder-fill text-[18px] text-foreground/70",
      },
      {
        label: "education",
        href: undefined,
        icon: "ri-folder-fill text-[18px] text-foreground/70",
        items: [
          {
            label: "high-school",
            href: "high-school",
            icon: "ri-markdown-fill text-[18px] text-foreground/70",
            items: undefined,
          },
          {
            label: "university",
            href: "university",
            icon: "ri-markdown-fill text-[18px] text-foreground/70",
            items: undefined,
          },
        ],
      },
    ],
  },
  {
    label: "contact",
    items: [
      {
        label: "email",
        href: "email",
        icon: "ri-mail-fill text-[18px] text-foreground/70",
      },
      {
        label: "phone",
        href: "phone",
        icon: "ri-phone-fill text-[18px] text-foreground/70",
      },
    ],
  },
];
