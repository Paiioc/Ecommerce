import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    
    backgroundColor: 'black',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  text:{
   textAlign: 'center',
   marginBottom: 20
  },

  navlink:{
    cursor: 'pointer'
  },
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  hero:{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 5,
  marginRight: 5,
  },
  h1:{ 
    fontSize: 50,
    fontWeight: 900,
    color: 'rgba(103,58,183,1)'
  },
  h2: {
    height: 70,
    marginTop: 40,
    marginBottom: 20, 
    borderRadius: 50,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
    fontSize: 40,
    fontWeight: 600,
    color: 'white',
    backgroundColor: 'rgba(103,58,183,1)'
  },
  h3:{
    display: 'flex',
    fontWeight: 600,
    fontSize: 23
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black',
    color: 'white',
    marginTop: 30,
    height: 40,
    textAlign: 'center',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  button:{
    display: 'flex',
    alignItems: 'center',
    marginLeft: 15
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem', color: 'primary',
  height : 600,
},

  mt2: { marginTop: '1rem', 
  justifyContent: 'center'},
  
  ListItem: {
  cursor: 'pointer'
  },
  img3:{
    borderRadius: 15,
    width: '100%',
    height: 'Auto',
  },
  bt:{
    margin: 30,
    textAlign: 'center'
  },
  trp:{
margin: 10
  },
  
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: '.5px solid black',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    margin: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: 'rgba(103,58,183,1)',
    padding: 5,
    margin: 2, 
    borderRadius: 50,
    '& span': {
      color: 'white',
    },
  },
  sort: {
    marginRight: 5,
  },

  fullContainer: { height: '100vh' },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
  },
  cancel: {
    display: 'flex',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  //cards
  pCard: {
    borderRadius: 15
  },
  pimg:{
    display: 'flex',
    justifyContent: 'center',
  },
  details:{
    textAlign: 'center'
  },
  pc: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  btn:{
    borderRadius: 15
  },
  btn2:{
    borderRadius: 50,
    height: 50,
    width: 120,
    fontSize: 22
  },
  //single product
  bbtn:{
    font: 600,
    width: 60,
    height: 50
  },
  img:{
    margin: 20,
    borderRadius: 15
  },
  detail2: {
    display: 'flex',
    alignItems: 'end'
  },
  //darkmode
  darkbtn:{
    backgroundColor: 'white',
    borderRadius: 20,
  }
}));
export default useStyles;
