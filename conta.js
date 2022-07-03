classe  ContaBancaria  {
	construtor ( agencia ,  numero ,  tipo )  {
		isso . agencia  =  agencia ;
		isso . numero  =  numero ;
		isso . tipo  =  tipo ;
		isso . _saldo  =  0 ;
	}

	sacar ( valor )  {
		if  ( valor  >  this . _saldo )  {
			 console de retorno . log ( 'Saque negado; insuficiente!' ) ;
		}

		isso . _saldo  =  isso . _saldo  -  valor ;
		devolva  isso . _saldo ;
	}

	depositar ( valor )  {
		isso . _saldo  =  isso . _saldo  +  valor ;
		devolva  isso . _saldo ;
	}

	set  saldo ( valor )  {
		isso . _saldo  =  valor ;
	}

	obter  saldo ( )  {
		devolva  isso . _saldo ;
	}
}

classe  ContaCorrente  estende  ContaBancaria  {
	construtor ( agencia ,  numero ,  cartaoCredito )  {
		super ( agencia ,  numero ) ;
		isso . tipo  =  'corrente' ;
		isso . _cartaoCredito  =  cartaoCredito ;
	}

	set  cartaoCredito ( valor )  {
		isso . _cartaoCredito  =  valor ;
	}

	obter  cartaoCrédito ( )  {
		devolva  isso . _cartãoCrédito ;
	}
}

classe  ContaPoupanca  estende  ContaBancaria  {
	construtor ( agencia ,  numero )  {
		super ( agencia ,  numero ) ;
		isso . tipo  =  'poupança' ;
	}
}

class  ContaUniversitaria  estende  ContaBancaria  {
	construtor ( agencia ,  numero )  {
		super ( agencia ,  numero ) ;
		isso . tipo  =  'universitário' ;
	}

	sacar ( valor )  {
		if  ( valor  >  500 )  {
			return  'Operação negada.' ;
		}

		isso . _saldo  =  isso . _saldo  -  valor ;
		devolva  isso . _saldo ;
	}
}

const  minhaConta  =  new  ContaCorrente ( 1,211 , true ) ; _ _  
const  contaUni  =  nova  ContaUniversitaria ( 2.333 ) ; _ _ 
