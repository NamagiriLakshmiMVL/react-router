import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export default function Context2() {
  const list= [{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp","headTitle":"Top Ways to Assess Soft Skills in Full Stack Developers in 2024","content":"When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills."},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp","headTitle":"Top Differences: Full Stack Developer vs Software Engineer 2024","content":"A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software."},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp","headTitle":"Horizontal vs Vertical Scaling for Efficient System Design","content":"Scalability stands at the heart of long-term viability, akin to a skyscraper’s foundation. It is the ability of your digital infrastructure to adapt and expand without excessive strain on resources. "},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp","headTitle":"Best Books to Learn Full-Stack Development","content":"Are you interested in becoming a full-stack developer but not sure where to start? In this blog, we’ll introduce you to a list of books to learn full-stack development."},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp","headTitle":"Top 10 Product-Based Companies for Full-Stack Developers [2024]","content":"In the dynamic landscape of technology, full-stack developers are the architects of the digital world, bridging the gap between front-end and back-end development."},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp","headTitle":"7 Best Full-Stack Development Online Courses [2024]","content":"Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise. "},

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