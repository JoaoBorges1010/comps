import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "asdasda",
      label: "Can I use React in a Project?",
      content: "You can use React in any project you want You can use React in any project you want You can use React in any project you want You can use React in any project you want "
    },
    {
      id: "asda",
      label: "Can I use Javascript in a Project?",
      content: "You can use Javascript in any project you want You can use Javascript in any project you want You can use Javascript in any project you want You can use Javascript in any project you want "
    },
    {
      id: "lalalss",
      label: "Can I use CSS in a Project?",
      content: "You can use CSS in any project you want You can use CSS in any project you want You can use CSS in any project you want You can use CSS in any project you want You can use CSS in any project you want "
    }
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
