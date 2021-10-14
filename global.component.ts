import { Component, OnInit } from '@angular/core';
import { NetflixModel } from './models/netflix-model';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  public netflixData:NetflixModel;
  constructor() { 
    this.netflixData={
      nav:{
        logo:{
          src:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png',
          alt:'logo warner'
        },
        name:'Netflix Live',
        inicio:'Inicio',
        search:'Buscar'
      },
      hero:{
        title:'LOS 5 MÁS POPULARES HOY',
        fotos:[{
          src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABcwTZZjTez5ITP7eQGMNHuHL66sLFf0rY_S2_ru1lvrUFLRqFbx3UecG1vcZ2QTlPQBx6XLNU-GTmprTnHGa8UwU4m0.jpg?r=fa3',
          alt:'Mr Robot'
        },
        {
          src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABVSTzk5DwxenUqeSSpuoXiQkXTpoJPwfdOxnRb8vsFuYw-6WF7kANAMoRv4G09l-JsnCZ5vZAXoRtbsJVPmZHvCBDesex5W-yg9ZJxHkXG1dN44aLMuQaABy6sFJ.jpg?r=d7a',
          alt:'El codigo que valia millones'
        },
        {
          src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABZK6xruGqzfbV5nGctTZNK-DuLL9xOCmWDNj5UBStkSHl60mEfQtRssC3W50dinDp-0_BUoNJAY7_N8u6JXP0fmol1c.jpg?r=34e',
          alt:'el cartel'
        },
        {
          src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABWl9VbTbbw3u4Rf8PGnlnkw5qcMmy2_bJbPdGjRcx_WWC_8ITQW7HoDUD7e6-hp-uBeItiUAuZgBt2SI2-co_bQczO8.jpg?r=116',
          alt:'Black'
        },
        {
          src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABUDuYZ3BGd5K2oILQoo-a6wt6kRoAvXi-zPelnnn-kj7vQIetfKxfHoyFfdgU9Cyg49SmP-otW-1mx4fKIa8I50IXuXevPS4jjdWWMvq630h8FLaiLB47bHwY4ZR.jpg?r=13b',
          alt:'Vagabond'
        }
      ]
      },
      films:{
        title:'COMEDIAS',
        fotos:[{
          src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABd6AqZSwbkjvbQWD58yujes6z9uFN-2NgFVhd8lhz1gh7HrnE-ysjcKrK5NKpYJeDm6pYOaZSc3Ao8bHzirPrUKJ-Gk.jpg?r=199',
          alt:'Jumanji'
        },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABfGA0N8hrD5DjZpmcu8h5ram1lX4XUSdJp2OfiErTV6hhp5tFo_-7AeLKHQwa0nhTP0hV5uSBbus_Aolc-Gptjef6ZYhd_b73X53Z8TLY8xNh5TIsbnvcyGU8dTP.jpg?r=38a',
            alt:'estornino'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABWcDFwCzcW6lJzoIsAe3dfSuq_USKcWy7TWzWoGr-7k_fVdI5-CKwgU5lJb1oAHQKyqTtHbfqup0aB7sbE2NCF5FQoQDVDWw8begMLivGlpCzL8iRZPPJbNwM3l_.jpg?r=c50',
            alt:'friendzone'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABW-nPPSdW2ZIgS6YaS_eTGH-XtyB5-qQg2l2-FM5_M6LTIaWvBLsZn6zlF32iTXyCZofX8XBJQYei0tpZBrEWb106ms.jpg?r=88f',
            alt:'sonic'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABV0mBXvukARxVQeK9I7zGyH4edRI3y0GdtfZiRcWyEM-Uo2a-lQZMTnp6Z4ZdsB0xq1_PGTaI3WM4NoB-eEa9PU_zD0.jpg?r=e30',
            alt:'sr smith'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABTYVjgpfxyLHumFUp6eKS-bctyoDfQwLa6iEbAb12faUUcmN-4N0Qv0qEUeN8juwXvM6DZWGEOZ5ocM1CG_9dH7AMI8.jpg?r=da9',
            alt:'khbehb'
          }
        ]

      },
      filmsTwo:{
        title:'DRAMAS BASADOS EN LIBROS',
        fotos:[{
          src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABQan783UhfKZvKE0X-HY7F78HJ0WvCCgl5GwIQ9iajH0gheZte3XP6JBrIEYTCTACQIk8enW-DILnTbt3fM4Uf095Hy0YFDSYPIdnrjbLD6XStNewGo7__HtkAR9.jpg?r=e93',
          alt:'distancia de rescate'
        },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABRYMpr3dqtqNq2eFl6CqqMFqIm_ScXcKq0QHChgl7xm-SqRGrZP5K_SMsLMgssh7UmjFCRaIJ-IMu-RKiwUWvPffsk0.jpg?r=1cf',
            alt:'blue story'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABZDFZGALCTBvimzfgt5ifbqYjAXxOip1tH1KEpNuA0S_b2BVpMUMHblAUNCKGm3apvL6jsDG_Ejejk22zIAL6wdoDKmyvVJx2SgfCnt_-OcdbZ99mNurL_3o8eUy.jpg?r=2d1',
            alt:'forever rich'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABYYOAifCLpVlcuyB7VrIRECY50jJPH_W9cvI7hdy7o-QhndgkJ8WwBvdc9XOctNji0i4csadas3-N9GJYRyLkYtnoVM.jpg?r=35f',
            alt:'el niño del pijama de rayas'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABUqXNGiJJZWeHwzCYE1Rzgr8Z6Mrdn3_WrnwYwvUeA9GF9vIDc8NYI7eiiklsLIpzDZdekNfBwjLOkF_RuJ673Xqkkf_nMYFrRi8d4MP5-V-O7dhCje4sWBAALzo.jpg?r=3cd',
            alt:'paradise beach'
          },
          {
            src:'https://occ-0-1934-358.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABXE17BXQhT27Jy-TVmH1heCmSOJB8I-hNFK9ER7I84hU01H28SbLkyzUHzMe5-vCHNspDuz_pdRr8RfoFZ-r-E0IzPE.jpg?r=ce3',
            alt:'infierno azul'
          }
        ]

      }
      
    }
  }

  ngOnInit(): void {
    console.log(this.netflixData.hero)
  }


}
