import Card from "./Card/Card"

const Recent = () => {
  return (
    <div className="py-[30px] w-full px-[32px] flex flex-col gap-[32px]">
      <h4 className="text-[32px] font-semibold leading-[38.4px]">Recent blog posts</h4>
      <div className="flex gap-[32px]  flex-1">
        <Card type="vertical" data={{
          author: "Olivia Rhye",
          published: "1 Jan 2023",
          showArrow: true,
          title: "UX review presentations",
          img: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          url:"https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
          tags: [
            {
              text: "Design"
            },
            {
              text: "Research"
            },
            {
              text: "Presentation"
            }
          ]
        }} />
      <div className="flex flex-col flex-1 gap-6 ">
        <Card type="horizontal-small" data={{
            author: "Phoenix Baker",
            published: "1 Jan 2023",
            title: "UX review presentations",
            img: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url:"https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
            tags: [
              {
                text: "UI/UX"
              },
              {
                text: "Design"
              }
            ]
          }} />
        <Card type="horizontal-small" data={{
            author: "Olivia Rhye",
            published: "1 Jan 2023",
            title: "Building your API Stack",
            img: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url:"https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
            tags: [
              {
                text: "UI/UX"
              },
              {
                text: "Design"
              }
            ]
          }} />
      </div>
      </div>
      <div className="w-full">
        <Card type= "horizontal" data={{
            author: "Olivia Rhye",
            published: "1 Jan 2023",
            showArrow: true,
            title: "Grid system for better Design User Interface",
            img: "https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url:"https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
            tags: [
              {
                text: "Design"
              },
              {
                text: "Interface"
              }
            ]
          } } />
      </div>
    </div>
  )
}

export default Recent
