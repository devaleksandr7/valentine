const imagens = [
      "iamge/foto1.JPG",
      "iamge/foto2.JPG",
      "iamge/foto3.JPG"
    ];

    let index = 0;
    const img = document.getElementById("carousel");

    setInterval(() => {
      index = (index + 1) % imagens.length;
      img.src = imagens[index];
    }, 4000); // troca a cada 4 segundos

    const dataInicio = new Date("2019-09-23");
    const dataFim = new Date("2025-06-12");

    function calcularDiferenca(data1, data2) {
      let anos = data2.getFullYear() - data1.getFullYear();
      let meses = data2.getMonth() - data1.getMonth();
      let dias = data2.getDate() - data1.getDate();

      if (dias < 0) {
        meses--;
        dias += new Date(data2.getFullYear(), data2.getMonth(), 0).getDate();
      }
      if (meses < 0) {
        anos--;
        meses += 12;
      }

      return { anos, meses, dias };
    }

    const diferenca = calcularDiferenca(dataInicio, dataFim);

    document.getElementById("tempoDecorrido").textContent =
      `${diferenca.anos} anos, ${diferenca.meses} meses e ${diferenca.dias} dias.`;