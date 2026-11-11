import Button from "@/component/button";//Absolute path import
import Greeting from "@/component/greeting";
import Message from "@/component/message";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Card from "@/component/card";

export default function Home() {
  return (
    <div>
      <Header/>
      <main style={{padding: "1rem"}}>
  
      <Card title="React App" desctiption="Learn about components and props"/>
      <Card title="Next.js App Router" desctiption="Bulid pages with modern routing"/>

      </main>
    
      <Message/>
      <Greeting name = "Willian"/>
      <Greeting name = "Smith"/>
      <Button/>
      <Footer/>
       
    </div>

  );
}
