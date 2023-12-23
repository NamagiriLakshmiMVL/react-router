import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export default function Context1() {
  const list= [{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Scalable-Vector-Graphics-SVG-for-Responsive-UI-Design.webp","headTitle":"Scalar Vector Graphics (SVG) for Responsive UI Design","content":"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design. This vector image format, based on Extensible Markup Language (XML), offers numerous advantages over traditional bitmap images."},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Ways-To-Use-AI-in-UX-Design.webp","headTitle":"Top 7 Ways To Use AI in UX Design","content":"Artificial Intelligence (AI) has revolutionized various industries, and the field of User Experience (UX) design is no exception."},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-A-Guide-to-Master-UIUX-Design-With-Online-Courses.webp","headTitle":"A Guide to Master UI/UX Design With Online Courses","content":"In the evolving world of digitalization, the synthesis of user interface and user experience is the driving force behind companies offering enchanting digital experiences. "},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/07/skilld-required-to-become-a-uui-ux-designer-1200x628.webp","headTitle":"Top 7 Websites to Learn UI/UX Design [2024]","content":"With the rising expectations of modern users, businesses are competing to offer exceptional user experiences for their users. "},
{"src":"https://miro.medium.com/v2/resize:fit:1024/1*rnzRMEgrUSFUBEtIyBzT4Q.png","headTitle":"Top 11 UI/UX Design Tools for 2024","content":"In the fast-paced digital landscape of 2024, creating exceptional user experiences has become paramount for businesses to thrive."},
{"src":"https://www.guvi.in/blog/wp-content/uploads/2023/12/UX-Designer-Job-Description_-Know-It-All.webp","headTitle":"UI/UX Designer Job Description: Know-It-All","content":"The UI designer focuses on designing the visual elements, layouts, and interactive components to enhance user experience and ensure a seamless interaction between users and the digital platform."},
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