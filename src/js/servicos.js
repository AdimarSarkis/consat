document.addEventListener('DOMContentLoaded', function() {
    const services = [
            {
              title: 'Consulta Jurídica',
              icon: "",
              description: 'Oferecemos consultoria jurídica especializada para diversas áreas do direito.',
              details: "Consiste em tirar pequenas dúvidas ou fornecer informações pelo telefone ou whatsapp quanto aos direitos trabalhistas e previdenciários. Neste caso não analizaremos nenhum documento."
            },
            {
              title: 'Triagem com Análise de Documentos',
              icon: "",
              description: 'O atendimento é realizado por videochamada, com agendamento prévio. O interessado passa por uma entrevista, recebe orientações sobre documentos necessários e, ao final, confirma as informações fornecidas, assinando digitalmente o documento. Se necessário, autoriza uma consulta aos seus direitos com um especialista.',
              details: "Atendimento pré-agendado por videochamada ou vídeoconferência. Enviaremos um link via WhatsApp até 10 minutos antes do horário marcado. O interessado acessa a sala virtual para realizar a triagem, onde será entrevistado sobre seu interesse e orientado a organizar e enviar a documentação necessária. Após a entrevista, o interessado conferirá as informações fornecidas, confirmando sua veracidade e assinando digitalmente o documento, autorizando, se necessário, uma consulta aos seus direitos com um especialista."
            },
            {
              title: 'Triagem com Relatório Resumido',
              icon: "",
              description: 'O interessado recebera um RELATÓRIO RESUMIDO de tudo o que foi analizado e os seus resultados juntamente com a citação das Leis e o Valor Total da Ação Trabalhista, ou do Valor Inicial do Benefício ou ainda, da Ação Previdenciária, se for o caso.',
              details: "A consulta trabalhista analisa todos os direitos do interessado, fornecendo um relatório com orientações sobre como e quando entrar com a ação, destacando pontos positivos e negativos que podem influenciar a decisão do juiz e indicando como melhorar as chances de sucesso. Já a consulta previdenciária verifica o melhor benefício disponível, orientando sobre os requisitos necessários ou documentos faltantes para obtê-lo."
            },
            {
              title: 'Consulta com Relatório Detalhado',
              icon: "",
              description: 'O interessado recebera um RELATÓRIO DETALHADO de tudo o que foi analizado e os seus resultados juntamente com a citação das Leis e o Valor Total da Ação Trabalhista, ou do Valor Inicial do Benefício ou ainda, da Ação Previdenciária, se for o caso.',
              details: `Esta consulta será feita da mesma forma que a
          anterior, porém o interessado receberá por escrito um
          RELATORIO DETALHADO com a DESCRIÇÃO DAS LEIS
          que foram consultadas e os cálculos que forem
          realizados, se for o caso
          Obs 1: Em ambas as consultas o interessado terá
          desconto de 50% do seu valor, se hover contratação
          dos serviços levantados até o prazo mínimo de 1 ano,
          se previdenciários, ou até 2 anos, se trabalhista.
          Obs 2: Pagará o VALOR TOTAL da consulta, se
          havendo direitos o consultante não quizer por qualquer
          motivo realizar a contratação dos serviços indicados.
          Obs 3: Estará INSENTO do pagamento, se não for
          verificado nehum direirto dentro dos prazos acima
          destacados.
               `
            },
            {
              title: 'Acordo Trabalhista Extra-Judicial',
              icon: "",
              description: 'Apresentação de custos de acordo com a tabela de honorários.',
              details: `O documento apresenta um rateio de custos para entrada e manutenção de processos, com foco em negociações e honorários. Abaixo estão os detalhes principais:
          Valor Original para 1 hora de negociações: R$282,40.
          
          Opções de Parcelamento:
          
          1+1 parcelas: Acréscimo de 2%, resultando em um valor total de R
          288,95 com parcelas de R$288,95, comparcelas de R$144,02.
          
          Valor da hora de Excelente: R$85,00. A partir da segunda contratação, há um desconto de até 40% sobre o valor original, dependendo do caso.
          
          Valor dos Honorários: Entre 15% a 20% sobre o valor do acordo, conforme a tabela. Se não houver acordo entre as partes, o contratante pode aproveitar 50% do valor do serviço caso decida ingressar com ação judicial.`
            },
            {
              title: 'Ação Judicial Trabalhista',
              icon: "",
              description: 'Apresentação de custos de acordo com a tabela de honorários.',
              details: `O valor original para uma hora de negociações é de R$564,80. Existem duas opções de parcelamento:
                * 1+1 parcelas: Acréscimo de 2%, resultando em um valor total de R$576,10 com parcelas de R$288,05.
                * 1+2 parcelas: Acréscimo de 4%, resultando em um valor total de R$587,40 com parcelas de R$195,80.
              Na segunda contratação, há um desconto de até 40% sobre o valor original, dependendo do caso. 
              Os honorários variam entre 15% e 20% sobre o valor do acordo, conforme a tabela:
                * 17 a 22% sobre possíveis acordos durante processos judiciais.
                * 25% sobre o valor da sentença (sem recurso).
                * 30% no final do recurso, se houver`
            },
            {
              title: 'Processos Administrativos (INSS)',
              icon: "",
              description: 'Rateio de custos para entrada e manutenção de processos *incluidos recursos*',
              details: `O valor original para uma hora de negociações é de R$460. Existem duas opções de parcelamento:
                * 1+1 parcelas: Acréscimo de 4%, resultando em um valor total de R$478,40 com parcelas de R$239,20.
                * 1+2 parcelas: Acréscimo de 6%, resultando em um valor total de R$487,60 com parcelas de R$162,53.
              Na segunda contratação, há um desconto de até 40% sobre o valor original, dependendo do caso. 
              Em caso de negativas do INSS, ficará a cargo da
          consultoria da empresa entrar com recurso
          administrativo ou ingressar com ação judicial, cabendo ao
          contratante arcar com o rateio dos custos de entrada e
          manutenção dos mesmo.`
            },
            {
              title: 'Intermediação de Acordos',
              icon: "",
              description: 'Rateio de custos - Processo Extrajudicial',
              details: `O valor original para uma hora de negociações é de R$180. Existe uma opção de parcelamento:
                * 1+1 parcelas: Acréscimo de 2%, resultando em um valor total de R$183,60 com parcelas de R$92,80.
                * Valor da hora de Excedente: R$80.
              Na segunda contratação, há um desconto de até 40% sobre o valor original, dependendo do caso. 
                * valor dos honorários: 10 a 15% sobre o valor do acordo. Se não houver acordo entre as partes e o interessado quiser ingressar com Ação Judicial, será cobrado o acréscimo de até 70% sobre o valor já pago.
          
              Acréscimo para o ingresso de Ação Judicial: R$126
                * 1+1 parcelas: Acréscimo de 2%, resultando em um valor total de R$128,52 com parcelas de R$64,26.
                * Valor dos honorários: 20 a 25% sobre o valor da ação.
              `
            },
            {
              title: 'Ações Judicias',
              icon: "",
              description: 'Rateio de custos de entrada e manutenção dos processos judiciais em geral *incluindo recursos*',
              details: `O valor original para uma hora de negociações é de R$560. Existem duas opções de parcelamento:
                * 1+1 parcelas: Acréscimo de 4%, resultando em um valor total de R$582,40 com parcelas de R$291,20.
                * 1+2 parcelas: Acréscimo de 6%, resultando em um valor total de R$593,60 com parcelas de R$197,87.
              Na segunda contratação, há um desconto de até 40% sobre o valor original, dependendo do caso. 
                * valor dos honorários: 20 a 25% conforme discrinado no contrato.
                * Havendo necessidade de entrar com recursos judiciais em 2ª instância, será cobrado o valor de acréscimo de 60% sobre o valor já pago.`
              
            },
            {
              title: 'Terceirização de Serviços',
              icon: "",
              description: 'Oferecemos serviços de terceirização para diversas áreas da sua empresa.',
              details: ""
            },
    ];

    const servicesContainer = document.getElementById('services-container');

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="icon">${service.icon}</div>
            <h3 class="title">${service.title}</h3>
            <p class="description">${service.description}</p>
            <div class="details">${service.details}</div>
        `;
        card.addEventListener('click', () => {
            const allCards = document.querySelectorAll('.card');
            allCards.forEach(c => c.classList.remove('expanded'));
            card.classList.add('expanded');
        });
        servicesContainer.appendChild(card);
    });
});