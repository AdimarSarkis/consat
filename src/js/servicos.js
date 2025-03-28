document.addEventListener("DOMContentLoaded", function () {
  const services = [
    {
      title: "Consulta Jurídica",
      id: 1,
      description:
        "Oferecemos consultoria jurídica especializada gratuita para diversas áreas do direito.",
      details:
        "Consiste em tirar pequenas dúvidas ou fornecer informações pelo telefone ou whatsapp quanto aos direitos trabalhistas e previdenciários. Neste caso não analizaremos nenhum documento.",
    },
    {
      title: "Triagem com Análise de Documentos",
      id: 2,
      description:
        "Triagem com atendimento por videochamada com agendamento.",
      details:
        "Atendimento por videochamada agendado. Enviaremos um link via WhatsApp até 10 min antes. O interessado realiza a triagem, envia a documentação, confere informações e assina digitalmente.",
    },
    {
      title: "Triagem com Relatório Resumido",
      id: 3,
      description:
        "Relatório resumido com resultados, leis e valor total da ação ou benefício.",
      details:
      'A consulta trabalhista analisa direitos, orienta sobre a ação e melhora as chances de sucesso. A consulta previdenciária verifica o melhor benefício e documentos necessários.',
    },
    {
      title: "Consulta com Relatório Detalhado",
      id: 4,
      description:
          "Relatório detalhado com resultados, leis e valor da ação ou benefício.",
      details: `Consulta com relatório detalhado e cálculos. Desconto de 50% na contratação e sem custo se não houver direitos verificados.`,
    },
    {
      title: "Acordo Trabalhista Extra-Judicial",
      id: 5,
      description:
        "Apresentação de custos de acordo com a tabela de honorários.",
      details: `O documento detalha custos de processos, negociações e honorários. Com até 40% de desconto na 2ª contratação. Honorários: 15% a 20% do acordo, 50% de desconto em ação judicial.`,
    },
    {
      title: "Ação Judicial Trabalhista",
      id: 6,
      description:
        "Apresentação de custos de acordo com a tabela de honorários.",
      details: `A negociação inclui opções de parcelamento e desconto de até 40% na segunda contratação. Os honorários variam conforme o tipo de acordo: 17% a 22% em processos judiciais, 25% sobre a sentença e 30% no final do recurso.`,
    },
    {
      title: "Processos Administrativos (INSS)",
      id: 7,
      description:
        "Processos administrativos no INSS: solicitação, revisão e regularização de benefícios.",
      details: `
              Em caso de negativas do INSS, ficará a cargo da
    recurso
          administrativo ou ingressar com ação judicial, cabendo ao
          contratante arcar com o rateio dos custos de entrada e
          manutenção.`,
    },
    {
      title: "Intermediação de Acordos",
      id: 8,
      description: "Intermediação de Acordos: Facilitação de negociações e resolução de pendências.",
      details: `Envolve a atuação de um profissional para facilitar negociações entre as partes, buscando uma solução amigável para pendências ou disputas, evitando a necessidade de processos judiciais.
              `,
    },
    {
      title: "Ações Judicias",
      id: 9,
      description:
        "Ações Judiciais: Representação legal para resolver disputas e garantir direitos.",
      details: `As ações judiciais são um serviço oferecido pela nossa empresa para proteger seus direitos e resolver disputas de forma eficaz. Atuamos com assessoria jurídica completa.`,
    },
    {
      title: "Terceirização de Serviços",
      id: 10,
      description:
        "Oferecemos serviços de terceirização para diversas áreas da sua empresa.",
      details: "Temos parceiros selecionados com quem trabalhamos. Para conhecê-los, clique em 'Saiba mais'",
    },
  ];

const servicesContainer = document.getElementById("services-container");

  services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "card";
    if(service.id %2 == 0){
      if(service.id == 10){
        card.innerHTML = `
      <div class='blog-card alt block'>
      <div class="meta">
        <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg);"></div>
      </div>
      <div class="description">
        <h1>${service.title}</h1>
        <h2>${service.description}</h2>
        <p>${service.details}</p> 
        <p class="read-more">
          <a href="#parceiros">Saiba Mais</a>
        </p>
      </div>
      </div>`
      }else{

        card.innerHTML = `
        <div class='blog-card alt block'>
        <div class="meta">
          <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg);"></div>
        </div>
        <div class="description">
          <h1>${service.title}</h1>
          <h2>${service.description}</h2>
          <p>${service.details}</p> 

        </div>
        </div>`
      }
    }else{
    card.innerHTML = `
      <div class='blog-card block'>
      <div class="meta">
        <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
      </div>
      <div class="description">
        <h1>${service.title}</h1>
        <h2>${service.description}</h2>
        <p>${service.details}</p> 
      </div>
    </div>
            
        `;}
    servicesContainer.appendChild(card);
  });
});
