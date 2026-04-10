import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useState } from "react"
import { toast } from "sonner"	

function Financiamento() {

  const [anoModelo, setAnoModelo] = useState("")
  const [cor, setCor] = useState("")
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [qtdPrestacoes, setQtdPrestacoes] = useState("")
  const [valorEntrada, setValorEntrada] = useState("")
  const [valorVeiculo, setValorVeiculo] = useState("")

  const [cpf, setCpf] = useState("")
  const [celular, setCelular] = useState("")
  const [dataNascimento, setDataNascimento] = useState("")
  const [email, setEmail] = useState("")
  const [estadoCivil, setEstadoCivil] = useState("")
  const [naturalidade, setNaturalidade] = useState("")
  const [nome, setNome] = useState("")
  const [nomeMae, setNomeMae] = useState("")
  const [nomePai, setNomePai] = useState("")
  const [rg, setRg] = useState("")
  const [sexo, setSexo] = useState("")
  const [telefone, setTelefone] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [bairro, setBairro] = useState("")
  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [tempoResidencia, setTempoResidencia] = useState("")

  const [bairroEmpresa, setBairroEmpresa] = useState("")
  const [cepEmpresa, setCepEmpresa] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [cargoFuncao, setCargoFuncao] = useState("")
  const [cidadeEmpresa, setCidadeEmpresa] = useState("")
  const [complementoEmpresa, setComplementoEmpresa] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [enderecoEmpresa, setEnderecoEmpresa] = useState("")
  const [estadoEmpresa, setEstadoEmpresa] = useState("")
  const [numeroEmpresa, setNumeroEmpresa] = useState("")
  const [rendaAtual, setRendaAtual] = useState("")
  const [telefoneEmpresa, setTelefoneEmpresa] = useState("")
  const [tempoEmprego, setTempoEmprego] = useState("")

  const [agencia, setAgencia] = useState("")
  const [banco, setBanco] = useState("")
  const [conta, setConta] = useState("")
  const [tempoConta, setTempoConta] = useState("")

  const [infoAdicionais, setInfoAdicionais] = useState("")
  const [Nome1, setNome1] = useState("")
  const [Nome2, setNome2] = useState("")
  const [Telefone1, setTelefone1] = useState("")
  const [Telefone2, setTelefone2] = useState("")

  const enviarFormulario = async () => {
  try {
    await addDoc(collection(db, "financiamento"), {
      "DadosDoVeiculo": {
        marca,
        modelo,
        anoModelo,
        cor,
        valorVeiculo,
        qtdPrestacoes,
        valorEntrada,
      },
      "DadosPessoais": {
        cpf,
        celular,
        dataNascimento,
        email,
        estadoCivil,
        naturalidade,
        nome,
        nomeMae,
        nomePai,
        rg,
        sexo,
        telefone,
        endereco,
        numero,
        complemento,
        bairro,
        cep,
        cidade,
        estado,
        tempoResidencia,     
      },
      "DadosProfissionais": {
        bairroEmpresa,
        cnpj,
        cepEmpresa,
        cargoFuncao,
        cidadeEmpresa,
        complementoEmpresa,
        empresa,
        enderecoEmpresa,
        estadoEmpresa,
        numeroEmpresa,
        rendaAtual,
        telefoneEmpresa,
        tempoEmprego,
      },
      "ReferenciaBancaria": {
        agencia,
        banco,
        conta,
        tempoConta,
      },
      "ReferenciaPessoal":{
        Nome1,
        Nome2,
        Telefone1,
        Telefone2,
        infoAdicionais,
      },

      createdAt: serverTimestamp(),
    });

    toast.success("Enviado com sucesso!");
  } catch (error) {
    console.error(error);
    toast.error("Erro ao enviar formulário!");
  }
};

  

  return (
    <div className="mt-12 min-h-screen justify-center flex px-4">

      <div className="w-full md:w-[1300px] flex flex-col">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Simule seu financiamento
          </h1>
          <p className="text-gray-600 mt-4 mb-6">
            Preencha o formulário abaixo para simular seu financiamento.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-gray-800">

          {/* Dados do veiculo */}
          <h2 className="text-2xl font-bold mb-4">Dados do Veículo</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Marca:</label>
              <input value={marca} onChange={(e) => setMarca(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md focus:border-blue-500 p-3" placeholder="Ex. Volkswagen"/>
            </div>

            <div className="flex flex-col gap-1">
              <label>Modelo:</label>
              <input value={modelo} onChange={(e) => setModelo(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md focus:border-blue-500 p-3" placeholder="Ex. Golf"/>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Ano/Modelo:</label>
              <input value={anoModelo} onChange={(e) => setAnoModelo(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md focus:border-blue-500 p-3" placeholder="Fab./Mod." />
            </div>

            <div className="flex flex-col gap-1">
              <label>Cor:</label>
              <input value={cor} onChange={(e) => setCor(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md focus:border-blue-500 p-3" placeholder="Ex. Preto"/>
            </div>

            <div className="flex flex-col gap-1">
              <label>Valor do veículo:</label>
              <input value={valorVeiculo} onChange={(e) => {const valor = e.target.value.replace(/[^0-9.,]/g, ''); setValorVeiculo(valor)}} className="border border-gray-600 w-full md:w-98 h-10 rounded-md focus:border-blue-500 p-3" placeholder="R$" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Valor da entrada:</label>
              <input value={valorEntrada} onChange={(e) => {const valor = e.target.value.replace(/[^0-9.,]/g, ''); setValorEntrada(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md focus:border-blue-500 p-3" placeholder="R$"/>
            </div>

            <div className="flex flex-col gap-1">
              <label>Qtd Prestações:</label>
              <input value={qtdPrestacoes} onChange={(e) => {const valor = e.target.value.replace(/[^0-9.,]/g, ''); setQtdPrestacoes(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md focus:border-blue-500 p-3" placeholder="Prestações"/>
            </div>
          </div>

          {/* Dados pessoais */}
          <h2 className="text-2xl font-bold mt-6 mb-4">Dados Pessoais</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Nome:</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" placeholder="Seu nome" />
            </div>

            <div className="flex flex-col gap-1">
              <label>CPF:</label>
              <input value={cpf} onChange={(e) => {const valor = e.target.value.replace(/[^0-9.-]/g, ''); setCpf(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" placeholder="Seu CPF" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>RG:</label>
              <input value={rg} onChange={(e) => {const valor = e.target.value.replace(/[^0-9.]/g, ''); setRg(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" placeholder="Seu RG"/>
            </div>

            <div className="flex flex-col gap-1">
              <label>Data de Nascimento:</label>
              <input value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="date" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Nome da Mãe:</label>
              <input value={nomeMae} onChange={(e) => setNomeMae(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3"/>
            </div>

            <div className="flex flex-col gap-1">
              <label>Nome do Pai:</label>
              <input value={nomePai} onChange={(e) => setNomePai(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3"/>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Naturalidade:</label>
              <input value={naturalidade} onChange={(e) => setNaturalidade(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3"/>
            </div>

            <div className="flex flex-col gap-1">
              <label>Estado Civil:</label>
              <select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-2">
                <option>-- Selecione --</option>
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Separado</option>
                <option>Divorciado</option>
                <option>Viúvo</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label>Sexo:</label>
              <select value={sexo} onChange={(e) => setSexo(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-2">
                <option>-- Selecione --</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Email:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="email" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Telefone:</label>
              <input value={telefone} onChange={(e) => {const valor = e.target.value.replace(/\D/g, ''); setTelefone(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Celular:</label>
              <input value={celular} onChange={(e) => {const valor = e.target.value.replace(/\D/g, ''); setCelular(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3"/>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-6 mb-4">Endereço</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Endereço:</label>
              <input value={endereco} onChange={(e) => setEndereco(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Número:</label>
              <input value={numero} onChange={(e) => {const valor = e.target.value.replace(/\D/g, ''); setNumero(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Complemento:</label>
              <input value={complemento} onChange={(e) => setComplemento(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>CEP:</label>
              <input value={cep} onChange={(e) => {const valor = e.target.value.replace(/[^0-9-]/g, ''); setCep(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Bairro:</label>
              <input value={bairro} onChange={(e) => setBairro(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Cidade:</label>
              <input value={cidade} onChange={(e) => setCidade(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Estado:</label>
              <select value={estado} onChange={(e) => setEstado(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-2">
                <option>-- Selecione --</option>
                <option>AL</option>
                <option>AP</option>
                <option>AM</option>
                <option>BA</option>
                <option>CE</option>
                <option>DF</option>
                <option>ES</option>
                <option>GO</option>
                <option>MA</option>
                <option>MT</option>
                <option>MS</option>
                <option>MG</option>
                <option>PA</option>
                <option>PB</option>
                <option>PR</option>
                <option>PE</option>
                <option>PI</option>
                <option>RJ</option>
                <option>RN</option>
                <option>RS</option>
                <option>RO</option>
                <option>RR</option>
                <option>SC</option>
                <option>SP</option>
                <option>SE</option>
                <option>TO</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Tempo de Residência:</label>
              <input value={tempoResidencia} onChange={(e) => setTempoResidencia(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>



           {/* Dados profissionais */}
          <h2 className="text-2xl font-bold mt-6 mb-4">Dados Profissionais</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Empresa onde trabalha:</label>
              <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>CNPJ:</label>
              <input value={cnpj} onChange={(e) => {const valor = e.target.value.replace(/[^0-9./-]/g, ''); setCnpj(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Cargo/Função:</label>
              <input value={cargoFuncao} onChange={(e) => setCargoFuncao(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Renda atual:</label>
              <input value={rendaAtual} onChange={(e) => {const valor = e.target.value.replace(/[^0-9.,]/g, ''); setRendaAtual(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" placeholder="R$" />
            </div>
          </div>

          {/* Endereço da empresa */}
          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Endereço da empresa:</label>
              <input value={enderecoEmpresa} onChange={(e) => setEnderecoEmpresa(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Número:</label>
              <input value={numeroEmpresa} onChange={(e) => {const valor = e.target.value.replace(/[^0-9]/g, ''); setNumeroEmpresa(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Complemento:</label>
              <input value={complementoEmpresa} onChange={(e) => setComplementoEmpresa(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>CEP:</label>
              <input value={cepEmpresa} onChange={(e) => {const valor = e.target.value.replace(/[^0-9-]/g, ''); setCepEmpresa(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Bairro:</label>
              <input value={bairroEmpresa} onChange={(e) => setBairroEmpresa(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Cidade:</label>
              <input value={cidadeEmpresa} onChange={(e) => setCidadeEmpresa(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Estado:</label>
              <select value={estadoEmpresa} onChange={(e) => setEstadoEmpresa(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-2">
                <option>-- Selecione --</option>
                <option>AL</option>
                <option>AP</option>
                <option>AM</option>
                <option>BA</option>
                <option>CE</option>
                <option>DF</option>
                <option>ES</option>
                <option>GO</option>
                <option>MA</option>
                <option>MT</option>
                <option>MS</option>
                <option>MG</option>
                <option>PA</option>
                <option>PB</option>
                <option>PR</option>
                <option>PE</option>
                <option>PI</option>
                <option>RJ</option>
                <option>RN</option>
                <option>RS</option>
                <option>RO</option>
                <option>RR</option>
                <option>SC</option>
                <option>SP</option>
                <option>SE</option>
                <option>TO</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Telefone:</label>
              <input value={telefoneEmpresa} onChange={(e) => {const valor = e.target.value.replace(/[^0-9]/g, ''); setTelefoneEmpresa(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Tempo neste emprego:</label>
              <input value={tempoEmprego} onChange={(e) => setTempoEmprego(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          {/* Referência bancária */}
          <h2 className="text-2xl font-bold mt-6 mb-4">Referência Bancária</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Banco:</label>
              <input value={banco} onChange={(e) => setBanco(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Agência:</label>
              <input value={agencia} onChange={(e) => {const valor = e.target.value.replace(/[^0-9]/g, ''); setAgencia(valor)}} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Conta:</label>
              <input value={conta} onChange={(e) => {const valor = e.target.value.replace(/[^0-9./-]/g, ''); setConta(valor)}} className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Tempo de conta:</label>
              <input value={tempoConta} onChange={(e) => setTempoConta(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          {/* Referência pessoal */}
          <h2 className="text-2xl font-bold mt-6 mb-4">Referência Pessoal</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Nome:</label>
              <input value={Nome1} onChange={(e) => setNome1(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Telefone:</label>
              <input value={Telefone1} onChange={(e) => {const valor = e.target.value.replace(/[^0-9]/g, ''); setTelefone1(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-5">
            <div className="flex flex-col gap-1">
              <label>Nome:</label>
              <input value={Nome2} onChange={(e) => setNome2(e.target.value)} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Telefone:</label>
              <input value={Telefone2} onChange={(e) => {const valor = e.target.value.replace(/[^0-9]/g, ''); setTelefone2(valor)}} className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" />
            </div>
          </div>

          <div className="mt-4">
            <label>Informações adicionais:</label>
            <textarea value={infoAdicionais} onChange={(e) => setInfoAdicionais(e.target.value)} className="w-full md:w-306 h-30 border border-gray-600 rounded-md p-3"></textarea>
          </div>

          <button onClick={enviarFormulario} className="justify-start w-50 h-11 bg-blue-500 rounded-md mt-5 text-white text-lg hover:bg-blue-600">
            Enviar financiamento
          </button>

        </div>
      </div>
    </div>
  )
}

export default Financiamento