
interface BlogPosts {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  topic: string;
  author: string;
  date: string;
  authorAvatar: string;
  topicImage: string;
  thumbnail: string;
  content: string;
  images: string[];
}

const blogPosts: BlogPosts[] = [
  {
    id: 1,
    title: "The Growing Inaccessibility of Science",
    subtitle: "How Barriers to Scientific Knowledge are Expanding",
    description: "Explore the increasing challenges in accessing scientific research and knowledge.",
    topic: "Science",
    author: "Georg Herbert Blüthner",
    date: "2025-02-13",
    authorAvatar: "georg-herbert-bluthner.webp",
    topicImage: "the-growing-inaccessibility-of-science-v0-gusdztk7vf3d1.webp",
    thumbnail: "gene-7031244_640.png",
    content: '<p>Science has long been a field driven by curiosity, discovery, and the pursuit of knowledge. However, in recent years, we have witnessed a troubling trend: the growing inaccessibility of scientific information. Despite the rise of the digital age and a greater number of open-access platforms, scientific research is increasingly becoming confined behind paywalls, complex jargon, and institutional barriers.</p>\n' +
        '\n' +
        '<h2>Barriers to Access: Paywalls and Publishing Models</h2>\n' +
        '<p>One of the most significant challenges facing the accessibility of science today is the dominance of paywalls in scientific journals. While open-access initiatives have gained traction, many of the most impactful journals still require expensive subscriptions to access research articles. This paywall system creates a divide between those who can afford access and those who cannot, limiting opportunities for individuals and institutions, particularly in developing countries, to access cutting-edge knowledge.</p>\n' +
        '\n' +
        '<h2>The Impact of Complex Jargon and Language</h2>\n' +
        '<p>Even when scientific research is available to the public, it is often written in complex, technical language that makes it difficult for non-specialists to understand. This further alienates the general public, preventing a wider audience from engaging with the information. In some cases, this leads to misinterpretations or the distortion of scientific facts, especially in media outlets that simplify research findings to fit a narrative.</p>\n' +
        '\n' +
        '<h2>The Role of Institutions and Commercialization</h2>\n' +
        '<p>Another key factor contributing to the growing inaccessibility of science is the commercialization of knowledge. As scientific research becomes more intertwined with corporate interests, institutions and researchers may prioritize profitable ventures over the free dissemination of knowledge. This can result in a system where scientific advancements are locked behind patents or proprietary technologies, further limiting public access to important findings.</p>\n' +
        '\n' +
        '<h2>The Need for Change: Open Science and Collaboration</h2>\n' +
        '<p>To counter these challenges, the scientific community must embrace the principles of open science—an approach that encourages transparency, collaboration, and the free sharing of data and research findings. Open-access journals, preprints, and collaborative platforms are essential to ensuring that science is accessible to everyone, regardless of their financial resources or academic background.</p>\n' +
        '\n' +
        '<p>Furthermore, efforts to make scientific language more accessible to the general public are crucial. This can be achieved by promoting plain language summaries, infographics, and public outreach initiatives that bridge the gap between researchers and the public.</p>\n' +
        '\n' +
        '<h2>A Future of Accessible Science</h2>\n' +
        '<p>While the growing inaccessibility of science is a serious concern, there is hope. As more individuals and institutions push for greater openness and transparency, we can move toward a future where scientific knowledge is truly accessible to all. By dismantling the barriers to access and prioritizing inclusivity, we can ensure that science remains a tool for the benefit of humanity as a whole.</p>\n',
    images: ["/images/hooks_example1.png", "/images/hooks_example2.png"]
  },
  {
    id: 2,
    title: "Studying in Graz: The NAWI Graz Experience",
    subtitle: "Fostering Collaboration Between University of Graz and TU Graz",
    description: "Discover how NAWI Graz blends scientific depth and technical expertise.",
    topic: "Education",
    author: "Georg Herbert Blüthner",
    date: "2025-02-13",
    authorAvatar: "georg-herbert-bluthner.webp",
    topicImage: "NAWI_Graz_Logo_2015.png",
    thumbnail: "university-library-4825366_640.jpg",
    content: "<p>The NAWI Graz program is an exceptional collaboration between the University of Graz and the Technical University of Graz (TU Graz). This partnership brings together the strengths of both institutions, allowing students to experience the best of both worlds—scientific depth at the University of Graz and technical application at TU Graz.</p>\n" +
        "\n" +
        "<p><strong>Bachelor’s in Environmental Systems Sciences</strong></p>\n" +
        "\n" +
        "<p>One of the standout programs within NAWI Graz is the Environmental Systems Sciences bachelor’s degree. This interdisciplinary program provides a strong foundation in environmental science, sustainability, and systems thinking. Students gain expertise in analyzing ecological and human-made systems using a combination of natural sciences, mathematics, and socio-economic approaches.</p>\n" +
        "\n" +
        "<p>At the University of Graz, students delve into environmental modeling, climate science, and sustainability studies, while TU Graz offers technical applications, data analysis, and engineering solutions to environmental challenges.</p>\n" +
        "\n" +
        "<p><strong>Master’s in Space Sciences and Earth from Space</strong></p>\n" +
        "\n" +
        "<p>For those passionate about space exploration and earth observation, the Space Sciences and Earth from Space master’s program provides cutting-edge education in astrophysics, remote sensing, and planetary sciences.</p>\n" +
        "\n" +
        "<p>At the University of Graz, students focus on astrophysics, geophysics, and planetary research, guided by leading scientists in space science.</p>\n" +
        "\n" +
        "<p>At TU Graz, the emphasis shifts to satellite technology, remote sensing, and data analysis, equipping students with the technical expertise needed for careers in the space industry.</p>\n" +
        "\n" +
        "<p><strong>A Collaborative Learning Experience</strong></p>\n" +
        "\n" +
        "<p>The NAWI Graz model ensures students receive an interdisciplinary education by taking courses at both universities. This allows for a dynamic learning environment where students engage with researchers, work on joint projects, and access state-of-the-art laboratories.</p>\n" +
        "\n" +
        "<p>With strong industry connections and opportunities for international research collaborations, NAWI Graz students are well-prepared for careers in environmental science, space technology, and beyond.</p>\n",
    images: ["/images/mui_example1.png", "/images/mui_example2.png"]
  },
    // {
    //     id: 3,
    //     title: "TypeScript Crash Course",
    //     subtitle: "A beginner's guide to TypeScript",
    //     description: "Learn the basics of TypeScript and how to use it in your projects. Blabla",
    //     topic: "TypeScript",
    //     topicImage: "/images/typescript.png",
    //     thumbnail: "/images/typescript_thumbnail.jpg",
    //     content: `TypeScript is a superset of JavaScript that adds static types and other features to the language...`,
    //     images: ["/images/typescript_example1.png", "/images/typescript_example2.png"]
    // },
    // {
    //     id: 4,
    //     title: "State Management with Redux",
    //     subtitle: "Managing complex state in React apps",
    //     description: "Explore the principles of Redux and how to use it for state management.",
    //     topic: "Redux",
    //     topicImage: "/images/redux.png",
    //     thumbnail: "/images/redux_thumbnail.jpg",
    //     content: `Redux is a predictable state container for JavaScript apps. It helps manage the state of your application...`,
    //     images: ["/images/redux_example1.png", "/images/redux_example2.png"]
    // },
    // {
    //     id: 5,
    //     title: "GraphQL Fundamentals",
    //     subtitle: "An introduction to GraphQL",
    //     description: "Learn the basics of GraphQL and how to use it to query and mutate data.",
    //     topic: "GraphQL",
    //     topicImage: "/images/graphql.png",
    //     thumbnail: "/images/graphql_thumbnail.jpg",
    //     content: `GraphQL is a query language for APIs and a runtime for executing those queries. It provides a more efficient...`,
    //     images: ["/images/graphql_example1.png", "/images/graphql_example2.png"]
    // },
    // {
    //     id: 6,
    //     title: "JAMstack Architecture",
    //     subtitle: "Building fast and secure web apps",
    //     description: "Discover the benefits of the JAMstack and how to build web applications with it.",
    //     topic: "JAMstack",
    //     topicImage: "/images/jamstack.png",
    //     thumbnail: "/images/jamstack_thumbnail.jpg",
    //     content: `The JAMstack is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup...`,
    //     images: ["/images/jamstack_example1.png", "/images/jamstack_example2.png"]
    // },
    // {
    //     id: 7,
    //     title: "Serverless Functions with AWS",
    //     subtitle: "Building scalable APIs with Lambda",
    //     description: "Learn how to create serverless functions with AWS Lambda and API Gateway.",
    //     topic: "AWS",
    //     topicImage: "/images/aws.png",
    //     thumbnail: "/images/aws_thumbnail.jpg",
    //     content: `AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume...`,
    //     images: ["/images/aws_example1.png", "/images/aws_example2.png"]
    // },
    // {
    //     id: 8,
    //     title: "CI/CD Pipelines with GitHub Actions",
    //     subtitle: "Automating your development workflow",
    //     description: "Set up continuous integration and deployment pipelines with GitHub Actions.",
    //     topic: "GitHub",
    //     topicImage: "/images/github.png",
    //     thumbnail: "/images/github_thumbnail.jpg",
    //     content: `GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD...`,
    //     images: ["/images/github_example1.png", "/images/github_example2.png"]
    // },
    // {
    //     id: 9,
    //     title: "Docker for Development",
    //     subtitle: "Containerizing your applications",
    //     description: "Learn how to use Docker to create isolated development environments for your projects.",
    //     topic: "Docker",
    //     topicImage: "/images/docker.png",
    //     thumbnail: "/images/docker_thumbnail.jpg",
    //     content: `Docker is a platform for developing, shipping, and running applications in containers. It provides a consistent...`,
    //     images: ["/images/docker_example1.png", "/images/docker_example2.png"]
    // }
];

export default blogPosts;