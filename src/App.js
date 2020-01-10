
import './App.css';
import React, { Component } from 'react';
import Movie from './Movie'




class App extends Component {

  state = {
    greeting: 'Hello',
    movies:[
      {
        
        title : "Matrix",
        poster : "https://image.chosun.com/sitedata/image/201908/21/2019082100738_0.jpg"
      },
      {
        
        title : "Full Metal Jacket",
        poster : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhAVFRUVFRUWFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHR0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsxLS0tLS0rLTctLSstLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEEBQYDB//EADwQAAIBAgMFBQYFAQgDAAAAAAABAgMRBCExBQYSQVEiYXGBkRMyUqGxwUJictHwkgcUM0OywuHxIySi/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAAICAwEAAgMAAAAAAAAAAQIRITEDEkEiMmFRgaH/2gAMAwEAAhEDEQA/AHHQw50MjocZDgCEIcQMOhhwBIcYQGZBDIcAQhCAEZfe/azivZQf6n9jSV6vDGUuib9DzrH05VJtvO7M878Cvg22WeEog4fCcObCrVdIxyu7XMxagbZrzvwxqdn4Yqz83fMra0mnk7/e3Mk4avHiqTn73B2b9clb0I8UnFu+fCnFa53tb0NZNBOwtVyjnqvoBViQ6NVpq38ZYRkpdzM7NU0anUlCScW01mmuTPS919s/3mn2v8SFuLvXKSPOalLuLHdjFOjXhLk3wy8JZP7PyHsWPTxxgkUk6CQKQSEQkFEBHSIAR3wcbyOBLwC1YRF6S2Aw2Ay2YWZre/EcNCX5momkm8mYXfqv7kPGTIy6XhN1kQWEwTJ0PRRCEdSDjoYQA4hCAEIQrgDjCEBkOMgmAMIQhBB21O1GXfZfMy02aPeCXYivzX9E/wBzNVGZZdpqLWkyvxEidVZXYqfeTDitrQu2+9v1AUDtOQFzXaiiiVSZGgSKZNCXCR1jYj0yRAik9Tou8U+qT9UdEcqHux/SvodUWR0EhkEAOg4gHSIiOWGCXZ8SuLSgrRXgOIy6EwWEwWUhyr6Hme91fixElyikj0jFzsvBNnkuOq8dScusm/mRnWnjnKMwQmNczbPRRCHOpBDjDgCEOMAIQhIAQhXArVVGLlJ5JXYgIIzuL3ktlCHm/wBitrbxV3o0vBIm5w20Eee1NrYiX+bPybX0I8sbWf8Amz/ql+5Puemv3gleUY8lG/q7fYzldlZOc5ayk/FtnKS6v5h7HpMmV2KQm4/EvUBqPVeotiAqYGokpOLinHiTlleLk4qSvyvFq/czjXwsoJSvFqV7OMuLNWun0eaJLS6/MbhXX5lewRIEiEg3TXX5jKl3haHSnMl05ZXISi1z+R1jOS5om6Fet4SScINZpxi0/JHZHnOz968RShGnwU5RglFXUr2Wl2mWeH35f48P/TP7NBtOq2qCRnMPvjhpe9xw8Y3X/wAtlvg9p0KnuVYN9L2fo8w2SadEAgwTsUVmWqRW4dXkizZURkFgsJgjSp95MRwUakvytLxZ5abzf2valGPxS+SMGzLPtv45xswIVwGSt6MhxojnWzOJCHEZCEIAQw4gBgalNSTUldPVMIQBSYrdyEs4Sce55r9ytrbs1Vo4y8Hb6mtHRFwh7YOrsevHWlLyV/oRKmGqLWEl4xf3PRxXF6Ht5dsyjKrXhSlJq8u0rWfCs35ZPM2OM3dpcLu+FcrLO/RZlrR2ZSdRV4p8d5wd9VZ2dn0yOW18Kq0o022lHtaq0np2l/NRTh03x6eZY/AxhJqM0/NERUO802+LlKVOPs4RVOKj2LpStlxOOaTduRnp3vlHutqG0zH+nWpg5KEZtZPRkWcDVbXoOFLD0Gu0oq/jJtsz206ThU4e5WFLyrPHU5ROE6YaaTzV0BN2WpK9i6coqpFZpSWaeT0d0XemOuVzS2ZCSvF3vzIWMwTgrrO3I0OyaFo5aPPW9vA4YyhKbdOCvKWUVpdvqZq1wzEJXdvMOxvcLuTSjFKVSbl+JrhScudstOhIjubh+cqj84r/AGjsZ+zzuzChc9Ip7o4Vaxk/Gb+1iZR3dwsdKEX+q8vqxaL2ii3G2jXnJ05tygo3u7vhatZcX2NojnQpRiuGMVFLkkkvRHUciKkYJdryJ7IeAWrJjLjLLsLBCYw4Tzzf3EXqwh8Mb+cv+jLstN5K/Hiaj6SsvLIq5GF7dOM1AsFhMYRvRUOCgjrZkOMhwBxCEBkMIQgQhCAEPEYUQB2IQdKneSXUSp2WzJRqXdNdm9r85Su+J+rIG8WBqRi3FtPuLjYuFVNSjF5KTtytfkScZL2lKV9YhMd48u25fr+nj2LqTk7Szz1NDuxsON/aSSus05P/AEor9ozipttczX7DjRhTjx1YurUhxKCea4ldW7kraGOM5aak5ZnbElPEpckcN59k8SjOOqVmFw/+xaXXP1H3mVSPbT7Csu5p6MU/yWfLLexadnEusPTp1KTjwJfmtmmQrcbLzZ+Btr4fQO2WllsXDuNNKTva/L+WAxODnxcdObhLiautbNWdu/Nlo4KMUomdxe03CuoyS4FaS658/HkO8KxxlaLdjFcXtYLitTlw3lJybed2m9NC9RSbsYfghUfx1qj8UnZF2hzpy+bUzuhIJAIJDYjQQyHESfgl2fFndnPDq0UdC4ypmcMZVUKcpPkm/RHZlJvhieDDTtztFeYdciTdeZ1Z8Tcurb9Wc2EwTB1hYwTAAnoiCQEWGmdbM44wrgCHGEAOIQhGQhDMAQ6GFEQEHSnZp2v3EfEV1HU54fFqQvab0uY2crjYvFapxWzndW+Gy/ZnfG0uzK3NZnLYz95eD+pJ2rWUKM5dIv6Gk/i2mVt28d2nGVSu4RV25WRrNl7Fp01B1Fxyism8+F8muliPuVsvilPET534b9/MtdsTtB8MlfJ3v0MccZJutblu6jJbWTnXcYvhTbi3G93ZtN/IrMdUq04SoynxRbTu/wAruiTRqODg5O/vXfjKT+5Or4dVYPLOza+pMTcrtUbNjeSX81NZKNopGa3bhepwmtdPPwyFIq12/D5Gals94mcqjmlGLUVbO8UXu0vaeyl7KDlK2i1SeTaXOyOe7WFcoZxaWV7prTxHezxy9ZbWhwNPhpxXdfzeb+pJQIURuHK7uxBIEdCS6oQyDoq8ku8ErSGiHGEy2ZmYz+0DE9mnDrJyfkbGbyPOd+K/FiOH4IJebzf2Jy6X45+mdYw7Yxk6AjMJgsA9Biw0c4oM6mQhwRXACEMOBkIQgBCGuIQI7UKN8+QqVBs7uqlGy5CtbePD7WX3gqOL1I+zqmaYe8bu0yNs15o5t/p1WcNpsmraa71Y4724tf3aSb96XD5XI8q6px43pFX9A9p4aNeGvZbUl4SV7nVv86c/iZt4nEqMnQgo01G0FL62+5j6tPEVajVSdpdG365HoksWoS07PCoteBntuTg53Uc/5kjKt7jxremZlCrTlZ2nnaybbfhkTqe0nBLsyVmtea53HpY2F7JWb1fM7ucHNQtdPW/QnadfB7HSWJutJdpef/RqoR1/UzM7Ow/sqzf4I5p9yzNNs28lG+Tk7+uZULpaYKnZX6km4KHKcuV3diHiCgkJNGgkCFESRnXCLtHElYBZthE3pOQzHGZaAVNDybbdf2lepLrJ+iy+x6jtOvwUpy6Rb+R5C3fPqRn8a+Kd0wwmIzbGYATBAPQh0MOdTI44yEBnuK4wrgBCBucMTi4w1zfKK1f7CCSgoRuxpQcYJysm1ey5eZHw+IFa3x8XG6sKuLUGk1kVO0cfa7TLFxUkVe0sEuhGUrXGyM7j8dxMn7Ltr0KbHYG0rolbOxMoZMyk1V7SttY+U6c+Ss0l92aLYkksPh3+GVGmm+9QRlNpRbpyaJu6W0/aYZUm7TpNpLrG919TWX6wx/N5TN6MO4NOPMzO1qDjZOWZf7XxHtIcLfaXJ87dCg2tWUnxW0STXQm8t7YrFh+mv1JWz6DcrnCFdMuNntRWmfLq2SXCTjabtCnzk05fpjn839CNvRVapXi2vZyg01ylfJ362+pNqTUE6s9bZLv5RXeRNsUX/c5p6u0n48SZU7Z53hZ7pbze3XsqrSqrR/Gl/u+pqDxLCYiUJKUXZp3TNtht7qySlKMakf6ZeF1l8i7w57G4QUWZXY2+VOomq0HTkna6vKL+6Zo8Li6dT3KkZeDTfpqhJS0PEaI6EkVybgVl5kBsscIuyhxOXSShmOhmUhn99MRw4eS5ytH1eZ5uzZ7/AGI/w4dW5Pyy+5jGZZ9ujxz8mYwmIlYWCEwQD0C44FxXOpk6JjgJjgBCbXMFsq9p1OJ8PJfUVpi2jtaMcoyV+qz9CnhiUpwlN+9NKK5ybZXY/DWd1qd91NmTr4j29R3jS0XK/cRvdXjjut3jJXfkiNZRI+KrviGqpyWQbdmlvh5I442xSU51aUrvOI1ba93mh3KI9OT4mgrFbUSRKxONi1qZ/EYtt2RllRI0GDp8Sz0aM9UwFSjWc6T56dV0L/ZtTsq5W4zEp1XYnejsldMTV443kmnzXTwKfEQlqm2n3l/SqRkrMqcTRdNtP3dUwl2zsuKJCMElxXg+vK/cc8LXandSckvn6iw0VOrwT6cSXVv/AILJYWMZJJFaT7mU51K0faqy1hFWaaXvPLmu8sdvVP8AxVF0j90VG8GPdKpRUf8ALTk114srPyT9SXtWqpUqkk8pxi4+Daf7j0ne2PazLPZlX8L5lfM6UW1ms+40vMJNxFGUHk7r8yTt3XFDGSjm4vLRxen3JVOalDxIc4200ehBL3Zu+NSGTqcS6VL/AOrX5mv2VvPh61lxqEvhbVvKR5g4KWqOEsOg1CuO3t6ZbUNF4HhWy9p4nDv/AMNZ2+CWcH5cvKx6TuzvxSxE1SqQ9jUeSu7wk+ifLuHGeeNjYgyeoRyrPIpk863xr8WIa+GKX3KFkza1bjrVJdZP5ZfYhsxrqxmoETHBYjMwWECwDd3HuDcVzo2yGmEmc0wkw2ZVaiirvRGZx9aXE5xbt3WfqW22cZGEeFtdrLP+fMzk6vDKV726rk+ngRc5vTbHwZXx3yfJr/oJ4+Lynl3vJG63bw8aeETWsrtvrdnndVxq5L3vr4Ho9Cl7HC06fSKKxvFpeOcq6cryJVFGYxG0uCeelzRbOxcakU0xY3borjtSbsZypUzNVj45GXxVOzJygcalLiK+vhZQfFqiyqVEhsbiYxpNPV6EH8cpbVShww1YWBw2V3q8yu2DQUm2zSJXVooLOdIkRqdJpk2dBTg0+hIweF4ou+qOG066pUpN62yHMdQ7WExlW1Zyi/dkrPwNV7TigpaXSfqYyWbvzb+pqYUVGMON34ZXS6Jafd+ZeTnQN4KfHVlJflXkoqxEoYtuk6bfu6eDenlmXmPgpRjNfpfd8Py+hmcTG0m11FLvgOVXUkYbQjzZ2w+Rd6CZBdmUVzWXiBhL2alyaSTTvzz8rad4cXzDlNJdryZGyrlOFmCyS3GayabXR5nJRA3PQ61FeNwqlPK49NXTAPU/7P8AbbxOG4Zu9Sk+GT5yj+GXya8i62vX4KU5dIt/I8v/ALMce6eJcL5VHwPx1j81bzN5vlX4cPJfFaPqP457j+nncnfMBhMEydBhhxmAMzvh8PxK/eR2WNOXCku4CrTjjCNtszoGvVUIuUtF/LIQicrqbaeLGZZyViNtVHVftL35NdLPJeBX0sW1k5NPRPlbo0IRGM3/AKdueXrcbOspNz4stgYT2mLpKSVs55aO3/J6Btapd2XIQjXHnAvJhMPLljOoyW0tmuTI+BpVKDum7dBCM+ui7XL2tGSzyKPaGLSYwgt2SsqYi7OOKUpuwwg6Ta77OqcF0ajZFZTXehxE/VXpIxWPjSvJuysYnbG05V5flWiEI1jHO8qqWWZo3U4knfVJ+qEIM2cS8F2oum3lJWv0fJ+pm8TBptS1TafihxE4nEJkqkshCNL0EqkNiGrJDiM/oc4U108CTGIhATo7Wtc5YbVp/wA5iEMG2BiHTqca1jUjL0d/seib74tThS4XlPtrway+o4gy+ov8ox7BYhGbQwwhABUo3kkSKsrtiEBfX//Z"
      },
      {
        
        title : "Oldboy",
        poster : "data:image/jpeg;base64,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"
      },
      {
        
        title :"Star Wars",
        poster : "https://cdn.mos.cms.futurecdn.net/DEpYy8jSdvD9dkvVDSPNoD-320-80.jpg"
      }
    ]
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title:"Trainspotting",
            poster:"https://cdn.mos.cms.futurecdn.net/DEpYy8jSdvD9dkvVDSPNoD-320-80.jpg"
          }
        ]
      })
    },5000)
  }



  render(){
    return(
      <div className="App">
        
        {this.state.movies.map((movies, index) => {
          return <Movie title={movies.title} poster={movies.poster} key={index}/>
        })}
      </div>
    )
  }
}

export default App;
