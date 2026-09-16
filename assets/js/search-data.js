// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-community",
          title: "community",
          description: "I am a strong believer in engaging with and building communities at the institutional, local, and national levels. Here are some examples of work that I have done and communities that I have been a part of during my time at Dartmouth.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/community/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Last updated 07/26",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-e-e-just-graduate-fellowship",
          title: 'E.E. Just Graduate Fellowship',
          description: "As a graduate fellow in the E.E. Just community, I am committed in my work to dismantle the network of barriers that are rooted in the legacy of American chattel slavery and colonialism in order to create a STEM ecosystem in which all scientists are able to thrive.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_eejust/";
            },},{id: "projects-science-advocacy",
          title: 'Science Advocacy',
          description: "I have advocated for supporting funding for the geosciences to my representatives in Congress as part of the AGU 2024 conference as well as through the 2025 AAAS CASE workshop. Read more about my experience at the CASE workshop by clicking on the link above!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_aaas_workshop/";
            },},{id: "projects-irving-institute-graduate-fellowship",
          title: 'Irving Institute Graduate Fellowship',
          description: "I was part of the inaugural cohort of graduate fellows in AY24-25, and collaborated with other graduate students to work on a project about potential impacts of the energy transition on climate.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_iigef/";
            },},{id: "projects-montshire-museum-of-science",
          title: 'Montshire Museum of Science',
          description: "One of my most rewarding experiences in the Upper Valley has been volunteering at the Montshire Museum of Science as a Volunteer Explainer. I lead activities on meteorite identification, cabbage juice pH experiments, and many more for students and families. Ask me about Ghana the ball python!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_montshire/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%6E%6E%69%74%74%61.%79%61%6F.%67%72@%64%61%72%74%6D%6F%75%74%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=paeYzzwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
