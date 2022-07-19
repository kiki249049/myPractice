# MaterialUI

### layout -> fixed(반응형 웹 제작)

```react
<Container fixed>
</Container>
```



### Grid

```react
 <Container fixed >
      <Header/>
      <Grid container>
        <Grid item xs={2}>
          <Nav/>
        </Grid>
        <Grid item xs={10}>
          <Article/>
        </Grid>
      </Grid>
    </Container>
// 그냥 <Grid item>은 자기 부피만큼 테두리가 생긴다
// Grid사용할때 가장 바깥쪽은 container로 해준다.
// xs는 12개 그리드기둥에서 각자 할당량만큼 가짐
```



### Dialog(modal)

```react
const [open,setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

<Dialog open={true} onClose={handleClose}>
   <DialogTitle>
      Create
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
         Content!!
       </DialogContentText>
     </DialogContent>
</Dialog> 
```

### FormControlLabel

```react
<FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        color="primary"
        label="Remember me"
      />
```

문구를 클릭해도 체크박스 선택가능하게하는것

### margin주는법

```react
<Button 
      type='submit'
      fullWidth
      variant='contained'
      sx={{mt : 3, mb: 2}} // margin주는법
      >Sign in</Button>
```

### component

```react
<Typography component="h1" variant="h5">
        Sign in
      </Typography> //h1 tag로 감싸진다는 뜻! 하지만 디자인은 h5
```

```react
<Avatar sx={{m : 1, bgcolor : 'secondary.main'}}>
        <LockOutlinedIcon />
      </Avatar>
// m은 margin
```

### Box => html에서 div역할!

```react
<Container component="main" maxWidth="xs"> // xs는 제일 작은사이즈!
    <Box sx={{ 
        marginTop : 8,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
      }}>
 
```

