import assert from "assert";
import createServer from "../src/compartido/servidor/server.js";
import axios from "axios";

const primeros9Ficcion = {
  paginaNro: 1,
  contenido: [
    { id: 1, nombretexto: "ejemplo1", genero: "ficción", idGenero: "ficcion" },
    { id: 2, nombretexto: "ejemplo2", genero: "ficción", idGenero: "ficcion" },
    { id: 3, nombretexto: "ejemplo3", genero: "ficción", idGenero: "ficcion" },
    { id: 4, nombretexto: "ejemplo4", genero: "ficción", idGenero: "ficcion" },
    { id: 5, nombretexto: "ejemplo5", genero: "ficción", idGenero: "ficcion" },
    { id: 6, nombretexto: "ejemplo6", genero: "ficción", idGenero: "ficcion" },
    { id: 7, nombretexto: "ejemplo7", genero: "ficción", idGenero: "ficcion" },
    { id: 8, nombretexto: "ejemplo8", genero: "ficción", idGenero: "ficcion" },
    { id: 9, nombretexto: "ejemplo9", genero: "ficción", idGenero: "ficcion" }
  ],
};

const primeros9NoFiccion = {
  paginaNro: 1,
  contenido: [
    { id: 11, nombretexto: "ejemplo11", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 12, nombretexto: "ejemplo12", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 13, nombretexto: "ejemplo13", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 14, nombretexto: "ejemplo14", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 15, nombretexto: "ejemplo15", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 16, nombretexto: "ejemplo16", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 17, nombretexto: "ejemplo17", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 18, nombretexto: "ejemplo18", genero: "no ficción", idGenero: "no_ficcion" },
    { id: 19, nombretexto: "ejemplo19", genero: "no ficción", idGenero: "no_ficcion" },
  ],
};

const primeros9Poesia = {
  paginaNro: 1,
  contenido: [
    { id: 21, nombretexto: "ejemplo21", genero: "poesía", idGenero: "poesia" },
    { id: 22, nombretexto: "ejemplo22", genero: "poesía", idGenero: "poesia" },
    { id: 23, nombretexto: "ejemplo23", genero: "poesía", idGenero: "poesia" },
    { id: 24, nombretexto: "ejemplo24", genero: "poesía", idGenero: "poesia" },
    { id: 25, nombretexto: "ejemplo25", genero: "poesía", idGenero: "poesia" },
    { id: 26, nombretexto: "ejemplo26", genero: "poesía", idGenero: "poesia" },
    { id: 27, nombretexto: "ejemplo27", genero: "poesía", idGenero: "poesia" },
    { id: 28, nombretexto: "ejemplo28", genero: "poesía", idGenero: "poesia" },
    { id: 29, nombretexto: "ejemplo29", genero: "poesía", idGenero: "poesia" }
  ],
};

const pagina2Poesia = {
  paginaNro: 2,
  contenido: [
    { id: 30, nombretexto: "ejemplo30", genero: "poesía", idGenero: "poesia" }],
};

const GenreError = "Género no encontrado"

let server;

describe("servidor", () => {
  beforeEach(async () => {
    server = await createServer({ port: 3000 });
  });

  afterEach(() => {
    server.close()
  });

  describe("get paginated", () => {

    it("trae los 9 primeros del género ficción", async () => {
      const res = await axios.get("http://localhost:3000/textos?p=1&categoria=ficcion");
      assert.deepStrictEqual(res.data, primeros9Ficcion);
    });

    it("trae los 9 primeros del género no ficción", async () => {
      const res = await axios.get("http://localhost:3000/textos?p=1&categoria=no_ficcion");
      assert.deepStrictEqual(res.data, primeros9NoFiccion);
    });

    it("trae los 9 primeros del género poesía", async () => {
      const res = await axios.get("http://localhost:3000/textos?p=1&categoria=poesia");
      assert.deepStrictEqual(res.data, primeros9Poesia);
    });

    it("trae poesía número 10 (en página 2)", async () => {
      const res = await axios.get("http://localhost:3000/textos?p=2&categoria=poesia");
      assert.deepStrictEqual(res.data, pagina2Poesia);
    });

    it("trae los 9 primeros del género drama (error)", async () => {
        const res = await axios.get("http://localhost:3000/textos?p=1&categoria=drama");
        assert.deepStrictEqual(res.data.message, GenreError);
    });
  });
});

