function Home(){
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="BadBank: A Bank You Can't Trust"
      title="Welcome to BadBank!"
      text="You can move around using the navigation bar."
      body={(<img src="bank-photo.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
