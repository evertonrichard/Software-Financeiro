// Codificação do primeiro grafico 
// Simulação de dados para o gráfico
const dados = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
        label: 'Evolução da Inadimplência',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [120, 100, 150, 90, 80, 110, 130, 140, 160, 170, 130, 110] 
    }]
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const ctx = document.getElementById('graficoNotasFiscais').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: dados,
    options: options
});

//Codificação do segundo grafico.

$(document).ready(function() {
    // Gerar dados aleatórios para o gráfico
    var dadosAleatorios = [];
    for (var i = 0; i < 12; i++) {
        dadosAleatorios.push(Math.floor(Math.random() * 100) + 1); 
    }

    // Simulação de dados para o gráfico
    var dadosGrafico = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Receitas recebidas',
            backgroundColor: '#329cd0',
            borderColor: '#329cd0', 
            borderWidth: 1,
            pointBackgroundColor: '#329cd0', 
            data: dadosAleatorios
        }]
    };

    // Configurações do gráfico
    var config = {
        type: 'line',
        data: dadosGrafico,
    };

    // Renderizar o gráfico usando Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, config);
});


//codificação da funcionalidade lista de notas fiscais 

document.getElementById('filterButton').addEventListener('click', function() {
    filtrarInformacoes();
    document.getElementById('filteredResults').style.display = 'block';
  });

  function filtrarInformacoes() {
    var mesEmissao = document.getElementById('mesEmissao').value;
    var mesCobranca = document.getElementById('mesCobranca').value;
    var mesPagamento = document.getElementById('mesPagamento').value;
    var statusPagamento = document.getElementById('statusPagamento').value;

    var joaoDaSilva = { 
      nomePagador: 'João Silva',
      identificacaoNota: '123456789',
      dataEmissaoNota: '01/02/2023',
      dataCobranca: '10/03/2023',
      dataPagamento: '05/02/2023',
      valorNota: 'R$100,00',
      docNotaFiscal: '12345',
      docBoleto: '67890',
      statusNota: statusPagamento 
    };

    var resultadosTabela = document.getElementById('resultadosTabela');
    var tbody = resultadosTabela.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    var row = '<tr>';
    row += '<td>' + joaoDaSilva.nomePagador + '</td>';
    row += '<td>' + joaoDaSilva.identificacaoNota + '</td>';
    row += '<td>' + joaoDaSilva.dataEmissaoNota + '</td>';
    row += '<td>' + joaoDaSilva.dataCobranca + '</td>';
    row += '<td>' + joaoDaSilva.dataPagamento + '</td>';
    row += '<td>' + joaoDaSilva.valorNota + '</td>';
    row += '<td>' + joaoDaSilva.docNotaFiscal + '</td>';
    row += '<td>' + joaoDaSilva.docBoleto + '</td>';
    row += '<td>' + joaoDaSilva.statusNota + '</td>';
    row += '</tr>';

    tbody.innerHTML += row;
  }

  //codificação do botão para exportar o excel 

  document.getElementById('exportButton').addEventListener('click', function() {
      exportarParaExcel();
  });

  function exportarParaExcel() {
      var tabela = document.getElementById('resultadosTabela');
      var nomeArquivo = 'dados_tabela.xlsx';
      var wb = XLSX.utils.table_to_book(tabela, {sheet: "Dados"});
      XLSX.writeFile(wb, nomeArquivo);
  }

//codificação para update dos dashboards ainda em manutenção.

function updateData() {
    var selectedMonth = document.getElementById("month").value;
    var selectedYear = document.getElementById("year").value;
    var selectedQuarter = document.getElementById("quarter").value;

    var newDataForGraficoNotasFiscais = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];
    var newDataForMyChart = [];
    for (var i = 0; i < 12; i++) {
        newDataForMyChart.push(Math.floor(Math.random() * 100) + 1); 
    }


    myChart.data.datasets[0].data = newDataForGraficoNotasFiscais;
    myChart.update();

    var myChart2 = Chart.getChart("myChart");
    myChart2.data.datasets[0].data = newDataForMyChart;
    myChart2.update();

    var dataFromDatabase = {
        valorNotas: "R$ 22,500.00",
        valorSemCobranca: "R$ 1,800.00",
        valorVencidas: "R$ 3,200.00",
        valorAVencer: "R$ 4,500.00",
        novoContainerContent: "R$ 4,000.00"
    };

    $("#valor-notas").text(dataFromDatabase.valorNotas);
    $("#valor-sem-cobranca").text(dataFromDatabase.valorSemCobranca);
    $("#valor-vencidas").text(dataFromDatabase.valorVencidas);
    $("#valor-vencer").text(dataFromDatabase.valorAVencer);
    $("#valor-pagas").text(dataFromDatabase.novoContainerContent);
}

//codificação botão de carregamento

$(document).ready(function() {
    $("#filter-Button").on("click", function() {

        $("#loading-spinner").show();

        setTimeout(function() {
            $("#loading-spinner").hide();
        }, 2000); 
    });
});






 

  