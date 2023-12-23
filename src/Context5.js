import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export default function Context5() {
  const list= [{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg","headTitle":"UI/UX Designer Job Description and Roles & Responsibilities","content":"UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade. You know what UI UX is, but do you know their roles and responsibilities? "},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp","headTitle":"Top 5 IT Jobs for Economics Students","content":"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp","headTitle":"Top IT Jobs for Commerce Students: A Lucrative Career Path","content":"With the rapid advancement of technology, the demand for IT professionals has soared in recent years. This trend has created a unique opportunity for commerce students to explore a career in the field of IT."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp","headTitle":"Automation Test Engineer Resume: 10 Important Things To Consider","content":"The world is moving towards automating the testing of products in order to increase work efficiency. Those who control the automation process will have a long career journey."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp","headTitle":"Professional Civil Engineer Resume: A Guide To Attract Employers in 2024","content":"The world is moving towards modernization leading to an increase in the popularity of civil engineering. The field is getting competitive and it is important for you to stay ahead of the crowd to achieve big."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp","headTitle":"9 Best Product-Based Companies for Project Management","content":"In today’s tech-driven world, the demand for project managers is higher than before. The workload of every other company is exponential and they need project managers to maintain them effectively. "},
  
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