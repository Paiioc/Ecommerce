import Contact from "../components/Contactform";
import Head from 'next/head'
import Layout from "../components/Layout"



export default function ContactForm() {


  return (
      <>  
<Layout>
      <Head>

      <title>Contact Us Page Of Paiioc Ask Your Queries Here</title>
      <meta name="description" content="paiioc contact us page to solve your query and tell us your query on our form. We like to solve your queries. We will contact you in 24 hours."/>
        

      </Head>

     <Contact/>
     </Layout>
            </>
  );
}