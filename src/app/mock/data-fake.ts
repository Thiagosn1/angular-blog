export interface BlogPostMock {
  id: string;
  title: string;
  description: string;
  photoCover: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: 'Filmes' | 'Series';
  readTime: string;
}

export const dataFake: BlogPostMock[] = [
  {
    "id":"1",
    "title": "NOVO HOMEM DE FERRO EM 3D",
    "description": "Marvel anuncia um novo filme do Homem de Ferro com foco em efeitos práticos e cenas em 3D.",
    "photoCover":"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg",
    "author":"Helena Stark",
    "publishedAt":"2026-04-05T10:00:00-03:00",
    "updatedAt":"2026-04-07T16:30:00-03:00",
    "category":"Filmes",
    "readTime":"4 min"
  },
  {
    "id":"2",
    "title": "Nova Série anunciada no Disney +",
    "description": "Disney+ confirma nova série ambientada após os eventos de WandaVision, com estreia prevista para o próximo semestre.",
    "photoCover":"https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg",
    "author":"Caio Banner",
    "publishedAt":"2026-03-28T09:20:00-03:00",
    "updatedAt":"2026-03-29T13:10:00-03:00",
    "category":"Series",
    "readTime":"3 min"
  },
  {
    "id":"3",
    "title": "Novo filme do pantera negra lançado em breve",
    "description": "Marvel confirma novidades do Pantera Negra para os próximos meses.",
    "photoCover":"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35720ACD323F927C3A83D809D0F460BD3651740DA519BCC184B6F042057EA14D/scale?width=1200&aspectRatio=1.78&format=jpeg",
    "author":"Nina Okoye",
    "publishedAt":"2026-04-01T14:45:00-03:00",
    "updatedAt":"2026-04-03T11:00:00-03:00",
    "category":"Filmes",
    "readTime":"5 min"
  },
  {
    "id":"4",
    "title": "Novo filme dos X-men está em pós produção, afirma diretor",
    "description": "Produção de X-men avança e deve ganhar mais detalhes em breve.",
    "photoCover":"https://midias.correiobraziliense.com.br/_midias/jpg/2022/07/22/675x450/1_xmen-26096415.jpeg?20220722171339?20220722171339",
    "author":"Victor Xavier",
    "publishedAt":"2026-04-12T18:05:00-03:00",
    "updatedAt":"2026-04-14T08:40:00-03:00",
    "category":"Filmes",
    "readTime":"4 min"
  }
]

export default dataFake;
