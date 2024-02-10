import {
  ArchiveBoxArrowDownIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import cargoLift from "../assets/cargo-lift.jpg";
import passengerLift from "../assets/passenger-lift.jpg";
import chainHoist from "../assets/chain-hoist.jpg";
import ropeHoist from "../assets/rope-hoist.jpg";
import generator from "../assets/generator.jpg";
import gantryCrane from "../assets/gantry-crane.jpg";
import overheadCrane from "../assets/overhead-crane.jpg";

import logoMeidoh from "../assets/logo-meidoh.png"
import logoCitra from "../assets/logo_citra.png"
import logoCSS from "../assets/logo_css-group.png"
import logoIndofood from "../assets/logo_indofood.png"
import logoIndopoly from "../assets/logo_indopoly.png"
import logoHM from "../assets/logo_pt-hm-sampoerna.png"
import logoSPI from "../assets/logo_pt-spi.png"
import logoSemenJakarta from "../assets/logo_semen-jakarta.png"
import logoSemenMerahPutih from "../assets/logo_semen-merah-putih.png"
import logoUnioleo from "../assets/logo_unioleo.png"

export const nav = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "customers",
    title: "Customers",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
];

export const stats = [
  {
    id: "stat-1",
    title: "Projects",
    value: "95+",
  },
  {
    id: "stat-1",
    title: "Customer",
    value: "150+",
  },
];

export const lineBusiness = [
  {
    name: "Supplier",
    text: "Kami adalah distributor resmi berbagai merk/brand vendor dan beragam jenis Lifting and Handling Equipment & Accessories.",
    icon: ArchiveBoxArrowDownIcon,
  },
  {
    name: "Design",
    text: "Kami memiliki tim teknisi spesialis yang siap melayani konsultasi, mendesain dan merancang solusi Lifting & Handling apapun kebutuhan industri anda.",
    icon: PencilIcon,
  },
  {
    name: "Manufacture",
    text: "Dengan fasilitas workshop modern dan tim engineer multi-skilled berpengalaman, kami siap melayani pengerjaan solusi Lifting & Handling yang Anda butuhkan.",
    icon: WrenchIcon,
  },
  {
    name: "Jasa & Installation",
    text: "Tim teknisi kami telah berpengalaman dalam pekerjaan/jasa maintenance berbagai peralatan industri dan penyedia instalasi Mechanical & Electrical Lifting Equipment.",
    icon: WrenchScrewdriverIcon,
  },
];

export const customers = [
  {
    name: "CSS Group",
    logo: logoCSS,
  },
  {
    name: "Citra Group",
    logo: logoCitra,
  },
  {
    name: "PT HM Sampoerna",
    logo: logoHM,
  },
  {
    name: "Indofood",
    logo: logoIndofood,
  },
  {
    name: "Indopoly",
    logo: logoIndopoly,
  },
  {
    name: "Meidoh",
    logo: logoMeidoh,
  },
  {
    name: "SPI",
    logo: logoSPI,
  },
  {
    name: "Semen Jakarta",
    logo: logoSemenJakarta,
  },
  {
    name: "Semen Merah Putih",
    logo: logoSemenMerahPutih,
  },
  {
    name: "Unioleo",
    logo: logoUnioleo,
  },
]

export const products = [
  {
    id: "chain-hoist",
    name: "Chain Hoist",
    product: [
      {
        name: "product",
        photo: chainHoist,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: "rope-hoist",
    name: "Rope Hoist",
    product: [
      {
        name: "product",
        photo: ropeHoist,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: "cargo-lift",
    name: "Cargo Lift",
    product: [
      {
        name: "product",
        photo: cargoLift,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    id: "passenger-lift",
    name: "Passenger Lift",
    product: [
      {
        name: "product",
        photo: passengerLift,
        description: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
];

export function getCategory(categoryId: any) {
  return products.find(({ id }) => categoryId === id);
}
