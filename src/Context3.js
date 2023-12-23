import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export default function Context3() {
  const list= [{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp","headTitle":"Top 10 High Paying Non-Coding Jobs in Data Science in 2024","content":"Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! "},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp","headTitle":"Impact of Certification Programs on Hiring Data Scientists","content":"Data scientists are the creators behind transforming the raw data into edible data insights. These data insights are supplements for the growth of modern businesses today."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp","headTitle":"Top Product-Based Companies for Data Science Freshers","content":"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp","headTitle":"What is the Difference between Data Science and Data Engineering?","content":"India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles."},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png","headTitle":"Top 10 Data Science Tools in 2024","content":"Data Science is an in-demand profession and will continue growing in the coming years. From this, you can assume its importance, "},
  {"src":"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp","headTitle":"Best Data Science Books to Learn in 2024","content":"Today, we’re going to talk about something really cool: data science. It’s all about using data to make smart decisions and create amazing things."}
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