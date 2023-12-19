function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  const user = ctx.users[0]
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [depositAmount, setDepositAmount] = React.useState('');

  function validate(depositAmount){
    if (!depositAmount) {
      setStatus('Error: No amount entered');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (isNaN(depositAmount)) {
      setStatus('Error: Deposit is not a valid number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (depositAmount < 0) {
      setStatus('Error: Deposit amount cannot be a negative number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }


  function handleDeposit(){
    if (!validate(amount)) {
      return;
    } 
    const sum = balance + Number(amount);
    user.balance = sum;
    setBalance(sum)
    setShow(false);
    
  } 
  
  function clearForm(){
    setShow(true);
  }

  return (
    <>
    <h1>Deposit</h1>
    <Card
      bgcolor="secondary"
      header={`Balance: ${balance}`}
      status={status}
      body={show ? (
              <>
              
              
              Amount<br/>
              <input type="amount" className="form-control" id="amount" placeholder="enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={amount === ''}>
                Make Deposit
              </button>
              </>
            
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Deposit</button>
              </>
            )}
            
          />
          </>
        )
      }
