import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export default function Context4() {
  const list= [{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp","headTitle":"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide","content":"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp","headTitle":"What Is Hacking? Types of Hacking & More","content":"Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. "},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png","headTitle":"Cybersecurity Vs Ethical Hacking: Top 10 Differences","content":"Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif","headTitle":"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!","content":"Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook"},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png","headTitle":"8 Different Types of Cybersecurity and Threats Involved","content":"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. "},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif","headTitle":"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?","content":"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. "}
  ]
  return(
    <div className='context-1'>
     {list.map((product)=>(<ImgMediaCard product={product}/>))}
    </div>
  )
}

 function ImgMediaCard({product}) {






  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {product.src} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.headTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.content}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Read More<KeyboardDoubleArrowRightIcon/></Button>
      </CardActions>
    </Card>
  );
}