function confirmar() {
  let result = document.getElementById("result");
  result.innerHTML = "";
  let options = document.querySelectorAll("input[type=radio]");
  const getValue = function () {
    if (options[0].checked) return "colar";
    if (options[1].checked) return "longo";
    if (options[2].checked) return "curto";
    if (options[3].checked) return "mix";
    if (options[4].checked) return "anel";
    if (options[5].checked) return "pulseira";
    if (options[6].checked) return "argola";
    if (options[7].checked) return "pequeno";
    if (options[8].checked) return "argolinha";
    if (options[9].checked) return "basic";
    if (options[10].checked) return "grande";
    if (options[11].checked) return "cartela";
    if (options[12].checked) return "earcuff";
    if (options[13].checked) return "piercing";
    if (options[14].checked) return "tornozeleira";
    if (options[15].checked) return "conjunto";
    if (options[16].checked) return "cabelo";
    return "";
  };
  const value = getValue();

  if (value !== "colar" && value !== "longo" && value !== "curto" && value !== "mix" && value !== "argola" && value !== "tornozeleira" && value !=="pequeno" && value !== "argolinha" && value !== "basic" && value !== "anel" && value !== "pulseira" && value !== "grande" && value !== "cartela" && value!== "piercing" && value !== "earcuff" && value !== "conjunto" && value !== "cabelo") {
    alert("Você errou! Selecione por favor uma das opções.");
    result.innerHTML = ""
  }

  const dados = {
    colar: [
      {
        name: "Choke de Colar Choker - CK0284 (Folheado)",
        price: "R$ 29,80",
      }, 
      {
        name:  "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0286 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0285 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0284 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0283 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0282 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0279 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0277 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0276 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0275 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0273 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Choker - CK0272 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0270 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0268 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0264 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0261 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0259 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0254 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0253 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0252 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0251 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0250 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Choker - CK0249 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0248 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0245 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0243 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0241 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0239 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0238 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0237 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0236 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0234 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0233 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0232 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0231 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0230 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Choker - CK0227 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0226 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Choker - CK0225 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0221 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0219 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0218 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0217 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0216 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0210 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0209 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0208 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0207 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0206 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0203 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0098 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0097 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0095 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0090 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0089 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0088 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0070 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0060 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0058 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0057 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0044 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0215 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0053 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0051 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0044 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0043 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0027 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0026 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0025 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0024 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0020 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0018 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0017 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0016 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0015 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0014 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0013 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0011 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0010 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0008 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0007 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0006 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0005 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Choker - CK0002 (Bijuteria)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0215 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Choker - CK0246 (Folheado)",
        price: "29,80"
      },
      {
        name: "Colar Choker - CK0054 (Folheado)",
        price: "R$ 29,80"
      }
    ],
    longo: [
      {
        name: "Colar Longo - CL0045 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Longo - CL0043 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Longo - CL0041 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Longo - CL0039 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Longo - CL0037 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0036 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0034 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0033 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0032 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0027 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0022 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0014 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0012 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0011 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0010 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0008 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0007 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0004 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Longo - CL0002 (Folheado)",
        price: "R$ 29,80",
      },
      
    ],
    curto: [
      {
        name: "Colar Escapulário -CC0745 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Escapulário -CC0744 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Escapulário -CC0743 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0742 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0740 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0739 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0738 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0736 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0735 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0733 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0732 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0730 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0729 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0728 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0726 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0724 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0723 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0722 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0702 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0719 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0716 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0711 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0710 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0706 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0705 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0704 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0702 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0701 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0700 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0699 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0697 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0695 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0693 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0692 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0689 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0688 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0687 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0685 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0684 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0683 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "ESGOTADO",
        price: "",
      },
      {
        name: "Colar Curto -CC0682 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0677 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0676 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0675 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0674 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0673 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0669 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0668 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0667 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0666 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0665 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0662 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0659 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0658 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0656 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0653 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Curto -CC0652 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Curto -CC0651 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Letras CC0101 (Somente as letras)",
        price: "R$ 15,80",
      },
      {
        name: "Colar de Letras -CC0100 (Folheado)",
        price: "R$ 33,80",
      },
      {
        name: "Colar Curto -CC0650 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0647 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0646 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0645 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0643 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0641 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0640 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0639 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0636 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0634 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0633 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0632 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0631 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0628 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0627 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0626 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0625 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0624 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0623 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0622 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0621 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0619 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0618 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0616 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0610 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0608 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0607 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0605 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0604 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0603 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0600 (Folheado)",
        price: "R$ 29,80",
      },
      {
        name: "Colar Curto -CC0001 (Folheado)",
        price: "R$ 29,80",
      },
      
      {
        name: "Colar Curto -CC0601 (Folheado)",
        price: "R$ 29,80",
      },
      
      {
        name: "Colar Curto -CC0664 (Folheado)",
        price: "R$ 29,80",
      },
    ],
    mix: [
      {
        name: "Mix de Colares - MX0185 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0184 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0183 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0182 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0181 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Mix de Colares - MX0179 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0178 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0177 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0176 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0175 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0174 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0173 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0172 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0171 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0170 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0169 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0167 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0164 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0162 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0161 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0160 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0159 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0158 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0157 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0156 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0155 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0154 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0153 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0152 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0151 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0150 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0149 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0148 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0147 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0146 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0145 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0144 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0141 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0139 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0138 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0137 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0136 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0135 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0133 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0132 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0131 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0130 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0129 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0128 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0127 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0125 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0118 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0116 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Mix de Colares - MX0113 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0185 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0091 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0071 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0057 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0042 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0030 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0027 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Mix de Colares - MX0009 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0008 (Folheado)",
        price: "R$ 28,80"
      },
      {
        name: "Mix de Colares - MX0007 (Folheado)",
        price: "R$ 28,80"
      },
      {
        name: "Mix de Colares - MX0006 (Folheado)",
        price: "R$ 28,80"
      },
      {
        name: "Mix de Colares - MX0005 (Folheado)",
        price: "R$ 28,80"
      },
      {
        name: "Mix de Colares - MX0002 (Folheado)",
        price: "R$ 28,80"
      },
      {
        name: "Mix de Colares - MX0001 (Folheado)",
        price: "R$ 28,80"
      },
      {
        name: "Mix de Colares - MX0186 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0190 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0189 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0188 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0194 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Mix de Colares - MX0193 (Folheado)",
        price: "R$ 38,80"
      },
    ],
    argola: [
      {
        name: "Brincos Argolas - BA0067 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0099 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0098 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0094 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0090 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0088 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0087 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0086 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0084 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0083 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0080 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0077 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0075 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0072 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0071 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0069 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0068 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0066 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0067 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0064 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0062 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0058 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0057 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0051 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Brincos Argolas - BA0047 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Brincos Argolas - BA0045 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0044 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0043 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0042 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0040 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0037 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0034 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0033 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0031 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0030 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0029 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0028 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0026 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0024 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0023 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0022 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0021 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0019 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0018 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0016 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0014 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0007 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0006 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0005 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0002 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0113 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "Brincos Argolas - BA0112 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "Brincos Argolas - BA0111 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "Brincos Argolas - BA0110 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "Brincos Argolas - BA0109 (Banho Flash)",
        price: "R$ 19,80"
      },
      {
        name: "Brincos Argolas - BA0107 (Banho Flash)",
        price: "R$ 19,80"
      },
      {
        name: "Brincos Argolas - BA0106 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "Brincos Argolas - BA0095 (Banho Flash)",
        price: "R$ 19,80"
      },
      {
        name: "Brincos Argolas - BA0035 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0027 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0012 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Argolas - BA0011 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0008 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0003 (Banho Flash)",
        price: "R$ 9,80"
      },
      {
        name: "Brincos Argolas - BA0100 (Banho Flash)",
        price: "R$ 9,80"
      },
    ],
    tornozeleira: [
      {
        name: "Tornozeleira - TO0044 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0040 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0039 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0038 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0036 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0031 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0027 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0024 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0023 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0021 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Tornozeleira - TO0011 (Folheado)",
        price: "R$ 17,80"
      },
    ],
    pequeno: [
      {
        name: "Brincos Pequenos - BP0189 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0188 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0187 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0186 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0185 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0184 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Pequenos - BP0175 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Pequenos - BP0167 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0164 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0158 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0157 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0150 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0146 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Pequenos - BP0142 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Pequenos - BP0138 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Pequenos - BP0134 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0129 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0120 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0118 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0115 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0109 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0108 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0107 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0106 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0104 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0103 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Pequenos - BP0101 (Banho Flash)",
        price: "R$ 15,80"
      },
      {
        name: "Brincos Pequenos - BP0100 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0099 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0096 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0093 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0072 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0071 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0066 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0063 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0059 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0058 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0056 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0055 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0054 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0053 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0047 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0044 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0041 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0037 (Banho Flash)",
        price: "11,80"
      },
      {
        name: "Brincos Pequenos - BP0034 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0033 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "Brincos Pequenos - BP0029 (Banho Flash)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0027 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0025 (Banho Flash)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0024 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0022 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0021 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0020 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0017 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0016 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0014 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0008 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0006 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0005 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0004 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0358 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0357 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0356 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0355 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0354 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0353 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0352 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0351 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0350 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0349 (Bijuteria)",
        price: "R$ 25,80"
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "Brincos Pequenos - BP0333 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "Brincos Pequenos - BP0300 (Bijuteria)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0312 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0301 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0308 (Bijuteria)",
        price: "R$ 6,90"
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "Brincos Pequenos - BP0301 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0300 (Bijuteria)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0299 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0298 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0297 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0296 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0295 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0294 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0293 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0292 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0291 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0290 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0289 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0288 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0287 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0286 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0285 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0284 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0283 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0282 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0281 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0280 (Folheado)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0279 (Banho Flash)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0202 (Banho Flash)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0199 (Banho Flash)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0345 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0344 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "Brincos Pequenos - BP0320 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0302 (Folheado)",
        price: "R$ 6,90"
      },
      { 
        name: "Brincos Pequenos - BP0272 (Banho Flash)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0266 (Banho Flash)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0265 (Banho Flash)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0264 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0262 (Banho Flash)",
        price: "R$ 19,80"
      },
      { 
        name: "Brincos Pequenos - BP0261 (Banho Flash)",
        price: "R$ 19,80"
      },
      { 
        name: "Brincos Pequenos - BP0258 (Banho Flash)",
        price: "R$ 19,80"
      },
      { 
        name: "Brincos Pequenos - BP0256 (Banho Flash)",
        price: "R$ 19,80"
      },
      { 
        name: "ESGOTADO",
        price: ""
      },
      { 
        name: "Brincos Pequenos - BP0220 (Folheado)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0219 (Folheado)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0218 (Folheado",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0216 (Folheado)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0215 (Folheado)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0214 (Folheado)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0213 (Folheado)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0212 (Folheado)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0206 (Banho Flash)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0197 (Banho Flash)",
        price: "R$ 25,80"
      },
      { 
        name: "Brincos Pequenos - BP0178 (Banho Flash)",
        price: "R$ 15,80"
      },
      { 
        name: "Brincos Pequenos - BP0254 (Banho Flash)",
        price: "R$ 19,80"
      },
      { 
        name: "Brincos Pequenos - BP0256 (Banho Flash)",
        price: "R$ 19,80"
      },
      { 
        name: "Brincos Pequenos - BP0162 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0002 (Banho Flash)",
        price: "R$ 11,80"
      },
      { 
        name: "Brincos Pequenos - BP0254 (Banho Flash)",
        price: "R$ 19,80"
      },
      {
        name: "Brincos Pequenos - BP0253 (Banho Flash)",
        price: "R$ 19,80"
      },
    ],
    argolinha: [
      {
        name : "Brincos Argolinhas - BL0146 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0145 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0144 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0143 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0142 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0140 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0138 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0136 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "ESGOTADO",
        price : ""
      },
      {
        name : "Brincos Argolinhas - BL0133 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0132 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0131 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0129 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0128 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0127 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0126 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0125 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0124 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0122 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0120 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0119 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0118 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0116 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0115 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0114 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0113 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0112 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0110 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0109 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0108 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0107 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0103 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0102 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0101 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0099 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0095 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0093 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0088 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0086 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0085 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0083 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0078 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0077 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0074 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0072 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0069 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0068 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "ESGOTADO",
        price : ""
      },
      {
        name : "Brincos Argolinhas - BL0060 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0057 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0056 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0051 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0050 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0049 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0048 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0046 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0044 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0037 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0034 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0033 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0032 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0031 (Banho Flash)",
        price : "R$ 11,80"
      },
      {
        name : "Brincos Argolinhas - BL0029 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0027 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0026 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0020 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0019 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0017 (Banho Flash)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0015 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0012 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0010 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0001 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0080 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0040 (Banho Flash)",
        price : "R$ 15,80"
      },
      {
        name : "Brincos Argolinhas - BL0030 (Folheado)",
        price : "R$ 9,80"
      },
      {
        name : "Brincos Argolinhas - BL0011 (Banho Flash)",
        price : "R$ 9,80"
      },
     

    ],
    basic: [
      {
        name : "Brincos Basic - BB0272 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0268 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0224 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0220 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "ESGOTADO",
        price : ""
      },
      {
        name : "Brincos Basic - BB0215 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0214 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0213 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0209 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0208 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0205 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0200 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0196 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0195 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0194 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0193 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0192 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0189 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0186 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0183 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0181 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0180 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0179 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0176 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0174 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0168 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0167 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0166 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0165 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0161 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0160 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "ESGOTADO",
        price : ""
      },
      {
        name : "Brincos Basic - BB0155 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0154 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0152 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0149 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0148 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0146 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0144 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0139 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0136 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0135 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0131 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0129 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0128 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0127 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0126 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0125 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0124 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0120 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0116 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0112 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0110 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0109 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0105 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "ESGOTADO",
        price : ""
      },
      {
        name : "Brincos Basic - BB0102 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0100 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0099 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0095 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0094 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0087 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0086 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0085 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0084 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0083 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "ESGOTADO",
        price : ""
      },
      {
        name : "Brincos Basic - BB0081 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0080 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0078 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0077 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0076 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0074 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0073 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0072 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0071 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0070 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0069 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0067 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0064 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0062 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0060 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0059 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0058 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0057 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0056 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0054 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "ESGOTADO",
        price : ""
      },
      {
        name : "Brincos Basic - BB0051 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0049 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0047 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0045 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0040 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0032 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0030 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0028 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0024 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0022 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0021 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0020 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0012 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0011 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0010 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0009 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0008 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0007 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0006 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0005 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0245 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0272 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0271 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0270 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0267 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0264 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0263 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0262 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0259 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0258 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0257 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0255 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0253 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0252 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0251 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0250 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0249 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0248 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0247 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0246 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0244 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0243 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0079 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0066 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0052 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0050 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0048 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0042 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0035 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0027 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0016 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0014 (Folheado)",
        price : "R$ 10,00"
      },
      {
        name : "Brincos Basic - BB0013 (Folheado)",
        price : "R$ 10,00"
      },
    ],
    anel: [
      {
        name: "Anel (Regulavel) - AN0096 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "ESGOTADO",
        price : ""
      },
      {
        name: "ESGOTADO",
        price : ""
      },
      {
        name: "Anel (Escolha o tamanho) -AN0012 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0071 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0070 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0069 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0068 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0065 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0064 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0063 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0062 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0061 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0060 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0059 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0058 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0039 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0038 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0037 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0036 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0035 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0034 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0029 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0028 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0027 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0023 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0022 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0021 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0020 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0017 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "ESGOTADO",
        price : ""
      },
      {
        name: "Anel (Escolha o tamanho) -AN0019 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0018 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0014 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0011 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0010 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0009 (Folheado)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0008 (Bijuteria)",
        priece : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0007 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0005 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0073 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0002 (Bijuteria)",
        price : "R$ 15,80"
      },
      {
        name: "Anel (Escolha o tamanho) -AN0003 (Bijuteria)",
        price: "R$ 15,80"
      },
    ],
    pulseira: [
      {
        name: "Pulseiras - PU0081 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0153 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0148 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0147 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0146 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0145 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0142 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0141 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0140 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0139 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0138 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0137 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0136 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0135 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0133 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0132 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0131 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0129 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0128 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0127 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0126 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0125 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0124 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0123 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0120 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0118 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0117 (Bijuteria)",
        price: "R$ 21,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0115 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0113 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0109 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0108 (Bijuteria)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0105 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0103 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0102 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0101 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0100 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0099 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0098 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0096 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0095 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0093 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0092 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0091 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0090 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0089 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "Pulseiras - PU0085 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0084 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0082 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0079 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0077 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0076 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0075 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0074 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0073 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0072 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0069 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0068 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0067 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0065 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0064 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0063 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0062 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0059 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0057 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0053 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0051 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0050 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0049 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0048 (Bijuteria)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0045 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0044 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0043 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0040 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0037 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0036 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0034 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0033 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0032 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0031 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0027 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0025 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0024 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0023 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0022 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0021 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0019 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0018 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "ESGOTADO",
        price: ""
      },
      {
        name: "Pulseiras - PU0014 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0013 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0012 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0011 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0010 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0009 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0008 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0006 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0005 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0002 (Folheado)",
        price: "R$ 21,80"
      },
      {
        name: "Pulseiras - PU0001 (Folheado)",
        price: "R$ 21,80"
      },
    ],
    grande: [
      {
        name: "BRINCOS - BG0117 (Banho Flash)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0116 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "BRINCOS - BG0110 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "BRINCOS - BG0094 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "BRINCOS - BG0093 (Banho Flash)",
        price: "R$ 25,80"
      },
      {
        name: "BRINCOS - BG0091 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0090 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0089 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0085 (Folheado)",
        price: "R$ 63,80"
      },
      {
        name: "BRINCOS - BG0081 (Folheado)",
        price: "R$ 63,80"
      },
      {
        name: "BRINCOS - BG0079 (Folheado)",
        price: "R$ 63,80"
      },
      {
        name: "BRINCOS - BG0073 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0072 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0068 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0066 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0063 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0061 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0060 (Folheado)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0057 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0052 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0051 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0050 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0049 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0048 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0039 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0038 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0037 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0034 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0025 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0021 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0017 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0015 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0013 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0009 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0005 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0004 (Bijuteria)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0001 (Folheado)",
        price: "R$ 15,80"
      },
      {
        name: "BRINCOS - BG0500 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0499 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0498 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0497 (Bijuteria)",
        price: "R$ 11,80"
      },
      {
        name: "BRINCOS - BG0495 (Bijuteria)",
        price: "R$ 11,80"
      },
    ],
    cartela: [
      {
        name: "Cartela de Brincos - CA0147 (Banho Flash)",
        price: "R$ 49,80"
      },
      {
        name: "Cartela de Brincos - CA0176 (Banho Flash)",
        price: "R$ 73,80"
      },
      {
        name: "Cartela de Brincos - CA0175 (Banho Flash)",
        price: "R$ 73,80"
      },
      {
        name: "Cartela de Brincos - CA0174 (Banho Flash)",
        price: "R$ 49,80"
      },
      {
        name: "Cartela de Brincos - CA0172 (Banho Flash)",
        price: "R$ 49,80"
      },
      {
        name: "Cartela de Brincos - CA0171 (Folheado)",
        price: "R$ 25,80"
      },
      {
        name: "Cartela de Brincos - CA0170 (Folheado)",
        price: "R$ 25,80"
      },
      {
        name: "Cartela de Brincos - CA0168 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0167 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0166 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0165 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0164 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0145 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0144 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0143 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0142 (Folheado)",
        price: "R$ 35,00"
      },
      {
        name: "Cartela de Brincos - CA0151 (Banho Flash)",
        price: "R$ 49,80"
      },
      {
        name: "Cartela de Brincos - CA0150 (Banho Flash)",
        price: "R$ 49,80"
      },
      {
        name: "Cartela de Brincos - CA0132 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0106 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0105 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0102 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0101 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0098 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0095 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0086 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0085 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0084 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0078 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0077 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0073 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0072 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0071 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0068 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0067 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0063 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0062 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0061 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0058 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0057 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0056 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0052 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0051 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0049 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0048 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0047 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0044 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0042 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0041 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0039 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0038 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0035 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0034 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0033 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0032 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0030 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0029 (Folheado)",
        price: "R$ 17,80"
      },  
      {
        name: "Cartela de Brincos - CA0028 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0025 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0019 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0018 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0015 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0014 (Bijuteria)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0011 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0009 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0006 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0003 (Folheado)",
        price: "R$ 17,80"
      },
      {
        name: "Cartela de Brincos - CA0306 (Folheado)",
        price: "R$ 17,80"
      },
    ],
    piercing: [
      {
        name: "Piercing Falso - PF0182 (Banho Flash)",
        price: "R$ 19,80" 
      },
      {
        name: "Piercing Falso - PF0181 (Banho Flash)",
        price: "R$ 19,80" 
      },
      {
        name: "Piercing Falso - PF0180 (Banho Flash)",
        price: "R$ 19,80" 
      },
      {
        name: "Piercing Falso - PF0179 (Banho Flash)",
        price: "R$ 19,80" 
      },
      {
        name: "Piercing Falso - PF0178 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0177 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0176 (Banho Flash)",
        price: "R$ 21,80" 
      },
      {
        name: "Piercing Falso - PF0175 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0174 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0173 (Banho Flash)",
        price: "R$ 21,80" 
      },
      {
        name: "Piercing Falso - PF0172 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0170 (Banho Flash)",
        price: "R$ 21,80" 
      },
      {
        name: "Piercing Falso - PF0169 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0168 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0166 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0165 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0164 (Banho Flash)",
        price: "R$ 21,80" 
      },
      {
        name: "Piercing Falso - PF0163 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0162 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0161 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0160 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0158 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "ESGOTADO",
        price: "" 
      },
      {
        name: "ESGOTADO",
        price: "" 
      },
      {
        name: "Piercing Falso - PF0152 (Banho Flash)",
        price: "R$ 21,80" 
      },
      {
        name: "Piercing Falso - PF0148 (Banho Flash)",
        price: "R$ 21,80" 
      },
      {
        name: "Piercing Falso - PF0145 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0142 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0138 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0136 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0133 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0130 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0129 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0121 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0120 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0119 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0117 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0113 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0111 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0107 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0106 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0103 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0098 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0089 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0086 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0080 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0079 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0072 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0071 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0070 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0068 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0043 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0042 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0041 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0035 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0034 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0020 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0019 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0018 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0016 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0015 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0013 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0012 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0011 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0008 (Banho Flash)",
        price: "R$ 15,80" 
      },
      {
        name: "Piercing Falso - PF0006 (Banho Flash)",
        price: "R$ 15,80" 
      },
    ],
    earcuff:[
      {
          name: "BRINCOS EARCUFF - BE0128 (Banho Flash)",
          price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0126 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0125 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0123 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0122 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0121 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0120 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0119 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0118 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0117 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0116 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0115 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0114 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0113 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0110 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0106 (Banho Flash)",
        price: "R$ 11,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0105 (Banho Flash)",
        price: "R$ 11,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0102 (Banho Flash)",
        price: "R$ 11,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0097 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0096 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0093 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0092 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0089 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0086 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0085 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0084 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0083 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0082 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0075 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0074 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0073 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0071 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0070 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0069 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0064 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0063 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0062 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0061 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0059 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0058 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0057 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0055 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0054 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0053 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0051 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0049 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0048 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0047 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0046 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0045 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0044 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0043 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0040 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0039 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0038 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0037 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0036 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0035 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0034 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0033 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0032 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0031 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0030 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0029 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0022 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0018 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0015 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0014 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0011 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0010 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0008 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0003 (Banho Flash)",
        price: "R$ 15,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0131 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0129 (Banho Flash)",
        price: "R$ 19,80"  
      },
      {
        name: "BRINCOS EARCUFF - BE0002 (Banho Flash)",
        price: "R$ 15,80"  
      },
    ],
    conjunto: [
      {
        name: "Conjuntos Colar + Brincos -CJ0109 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0108 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Pulseira -CJ0093 (Folheado)",
        price: "R$ 39,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0067 (Folheado)",
        price: "R$ 42,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0122 (Folheado)",
        price: "R$ 44,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0121 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0120 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0118 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0117 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0116 (Folheado)",
        price: "R$ 44,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0115 (Folheado)",
        price: "R$ 44,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0114 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0111 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0110 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0107 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0106 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0105 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0104 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0103 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0102 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0101 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0100 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0099 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0098 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0097 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0096 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0095 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0094 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0092 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0082 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0080 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0064 (Folheado)",
        price: "R$ 42,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0046 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0038 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0032 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos Colar + Brincos -CJ0108 (Folheado)",
        price: "R$ 38,80"
      },
      {
        name: "Conjuntos -CJ0201 (Semi Jóia)",
        price: "R$ 190,00"       
      },
      {
        name: "Conjuntos - CJ0200 (Semi Jóia)",
        price: "R$ 190,00"
      },
      {
        name: "Conjuntos - CJ0187 (Semi Jóia)",
        price: "R$ 93,80"
      },
      {
        name: "Conjuntos - CJ0186 (Semi Jóia)",
        price: "R$ 93,80"
      },
      {
        name: "Conjuntos - CJ0179 (Semi Jóia)",
        price: "R$ 125,80"        
      },
      {
        name: "Conjuntos - CJ0178 (Semi Jóia)",
        price: "R$ 125,80"
      },
    ],
    cabelo: [
      {
        name: "ACESSÓRIOS DE CABELO -AC0073",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0072",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0070",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0069",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0067",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0066",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0065",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0064",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0063",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0062",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0061",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0060",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0059",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0058",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0057",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0056",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0055",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0053",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0050",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0049",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0048",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0047",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0044",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0043",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0042",
        price: "R$ 15,80"  
      },
      {
        name: "ACESSÓRIOS DE CABELO -AC0041",
        price: "R$ 15,80"  
      },
    ],
    piercing: [
   {
     name: "Piercing Falso - PF0182 (Banho Flash)",
     price: "R$ 19,80" 
   },
   {
     name: "Piercing Falso - PF0181 (Banho Flash)",
     price: "R$ 19,80" 
   },
   {
     name: "Piercing Falso - PF0180 (Banho Flash)",
     price: "R$ 19,80" 
   },
   {
     name: "Piercing Falso - PF0179 (Banho Flash)",
     price: "R$ 19,80" 
   },
   {
     name: "Piercing Falso - PF0178 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0177 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0176 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0175 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0174 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0173 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0172 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0170 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0169 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0168 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0166 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0165 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0164 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0163 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0162 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0161 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0160 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0158 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0157 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0153 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0152 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0148 (Banho Flash)",
     price: "R$ 21,80" 
   },
   {
     name: "Piercing Falso - PF0145 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0142 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0138 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0136 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0133 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0130 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0129 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0121 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0120 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0119 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0117 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0113 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0111 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0107 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0106 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0103 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0098 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0089 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0086 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0080 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0079 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0072 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0071 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0070 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0068 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0043 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0042 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0041 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0035 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0034 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0020 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0019 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0018 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0016 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0015 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0013 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0012 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0011 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0008 (Banho Flash)",
     price: "R$ 15,80" 
   },
   {
     name: "Piercing Falso - PF0006 (Banho Flash)",
     price: "R$ 15,80" 
   },
    ],
     earcuff:[
   {
       name: "BRINCOS EARCUFF - BE0128 (Banho Flash)",
       price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0126 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0125 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0123 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0122 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0121 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0120 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0119 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0118 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0117 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0116 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0115 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0114 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0113 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0110 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0106 (Banho Flash)",
     price: "R$ 11,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0105 (Banho Flash)",
     price: "R$ 11,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0102 (Banho Flash)",
     price: "R$ 11,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0097 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0096 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0093 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0092 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0089 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0086 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0085 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0084 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0083 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0082 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0075 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0074 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0073 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0071 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0070 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0069 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0064 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0063 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0062 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0061 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0059 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0058 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0057 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0055 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0054 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0053 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0051 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0049 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0048 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0047 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0046 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0045 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0044 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0043 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0040 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0039 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0038 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0037 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0036 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0035 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0034 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0033 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0032 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0031 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0030 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0029 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0022 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0018 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0015 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0014 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0011 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0010 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0008 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0003 (Banho Flash)",
     price: "R$ 15,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0131 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0129 (Banho Flash)",
     price: "R$ 19,80"  
   },
   {
     name: "BRINCOS EARCUFF - BE0002 (Banho Flash)",
     price: "R$ 15,80"  
   },
    ],
     conjunto: [
   {
     name: "Conjuntos Colar + Brincos -CJ0109 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0108 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Pulseira -CJ0093 (Folheado)",
     price: "R$ 39,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0067 (Folheado)",
     price: "R$ 42,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0122 (Folheado)",
     price: "R$ 44,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0121 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0120 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0118 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0117 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0116 (Folheado)",
     price: "R$ 44,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0115 (Folheado)",
     price: "R$ 44,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0114 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0111 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0110 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0107 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0106 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0105 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0104 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0103 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0102 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0101 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0100 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0099 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0098 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0097 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0096 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0095 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0094 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0092 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0082 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0080 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0064 (Folheado)",
     price: "R$ 42,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0046 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0038 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0032 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos Colar + Brincos -CJ0108 (Folheado)",
     price: "R$ 38,80"
   },
   {
     name: "Conjuntos -CJ0201 (Semi Jóia)",
     price: "R$ 190,00"       
   },
   {
     name: "Conjuntos - CJ0200 (Semi Jóia)",
     price: "R$ 190,00"
   },
   {
     name: "Conjuntos - CJ0187 (Semi Jóia)",
     price: "R$ 93,80"
   },
   {
     name: "Conjuntos - CJ0186 (Semi Jóia)",
     price: "R$ 93,80"
   },
   {
     name: "Conjuntos - CJ0179 (Semi Jóia)",
     price: "R$ 125,80"        
   },
   {
     name: "Conjuntos - CJ0178 (Semi Jóia)",
     price: "R$ 125,80"
   },
    ],
    cabelo: [
  {
    name: "ACESSÓRIOS DE CABELO -AC0073",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0072",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0070",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0069",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0067",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0066",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0065",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0064",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0063",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0062",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0061",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0060",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0059",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0058",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0057",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0056",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0055",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0053",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0050",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0049",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0048",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0047",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0044",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0043",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0042",
    price: "R$ 15,80"  
  },
  {
    name: "ACESSÓRIOS DE CABELO -AC0041",
    price: "R$ 15,80"  
  },
    ],
  };

  const limits = {
    colar: 101,
    longo: 19,
    curto: 95,
    mix: 77,
    argola: 67,
    pequeno: 139,
    argolinha: 76,
    basic: 141,
    tornozeleira: 11,
    anel: 43,
    pulseira: 108,
    grande: 42,
    cartela: 68,
    piercing: 66,
    earcuff: 75,
    conjunto: 42,
    cabelo: 26,
  };

  const maxImagesInFolder = limits[value]; // maior numero de arquivos dentro da pasta correspondente
  for (let index = 1; index <= maxImagesInFolder; index++) {
    const box = document.createElement("a");
    const image = document.createElement("img");
    image.setAttribute("src", `img/${value}/${value}${index}.png`);

    const title = document.createElement("h3");
    title.setAttribute("id", "titulo");
    title.innerText = dados[value][index - 1].name;

    const price = document.createElement("h4");
    price.setAttribute("id", "preco");
    price.innerText = dados[value][index - 1].price;

    box.appendChild(title);
    box.appendChild(price);
    box.appendChild(image);
    box.setAttribute("id", "box");
    box.setAttribute(
      "href",
      `https://wa.me/5512982034315?text=Tenho+interesse+no+produto+-+${dados[
        value
      ][index - 1].name?.replace(/ /g, "+")}++no+valor+de+${dados[value][
        index - 1
      ].price?.replace(/ /g, "+")}`
    );
    box.setAttribute("target", "_blank");
    result.appendChild(box);
  }
}
