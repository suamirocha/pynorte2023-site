import React from 'react'

const CodeOfConductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-mobile-coc sm:bg-desktop-coc bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
      <div className="px-48 flex flex-col justify-center">
        <h1 className="text-6xl text-white font-bold mb-4">
          Código de Conduta
        </h1>
        <p className="text-400 text-white">
          O evento Python Norte é um ambiente amistoso, de boa convivência,
          inclusivo e livre de intimidação, onde todas as pessoas são bem-vindas
          e a civilidade é exigida. Com esta finalidade, a organização do evento
          conta com uma
          <span className="font-bold text-700"> Equipe de Resposta</span> que
          atua para garantir um ambiente com essas qualidades. Por isso:
        </p>
        <ul className="list-disc list-inside mt-4 text-white">
          <li>
            Não é tolerado nenhum tipo de assédio, discriminação inapropriada ou
            humilhação pública;.
          </li>
          <li>Não é tolerado o descumprimento das leis brasileiras;</li>
          <li>
            Toda pessoa presente no evento, independente do seu papel, está
            sujeita a estas regras.
          </li>
        </ul>
        <p className="text-400 text-white">Desta forma, entendemos que:</p>
        <ul className="list-disc list-inside mt-4 text-white">
          <li>
            Assédio é a ação de insistir, perseguir ou coagir outra pessoa a um
            comportamento involuntário.;
          </li>
          <li>
            Discriminação inapropriada é o ato de separar, injuriar ou humilhar
            alguém promovendo sua exclusão por atributo particular da mesma.
          </li>
          <li>
            Humilhação pública é o ato de submeter, rebaixar, ridicularizar ou
            promover o vexame de outro publicamente.
          </li>
        </ul>
        <p className="text-400 text-white">
          O público alvo do evento também inclui crianças e adolescentes, por
          isso buscamos manter um ambiente apropriado para todas as faixas
          etárias. Sendo assim, linguagem e imagens sexualizadas não são
          adequados para palestras e ações promocionais de patrocinadores.
        </p>
        <p className="text-400 text-white">
          Se você se sentiu assediado, discriminado indevidamente ou humilhado,
          ou presenciou alguma destas atitudes, por favor entre em contato com a
          Equipe de Resposta. Havendo um relato de violação destes princípios, a
          <span className="text-bold text-700"> Equipe de Resposta </span>
          realizará a devida análise e, quando necessário, tomará as ações para
          impedir a reincidência. Estas ações podem, mas não se restringem nem
          implicam em ir desde uma conversa em busca da retratação até um
          convite a se retirar do evento por tempo indeterminado.
        </p>
      </div>
    </div>
  )
}

export default CodeOfConductPage
