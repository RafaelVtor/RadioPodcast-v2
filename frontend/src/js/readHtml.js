window.addEventListener('load', () => {
    const readHtml = {


        detail: '',

        async getReadHtml() {
            console.log('object')

            let content
            const url = `http://127.0.0.1:5500/guia.txt`

            try {
                let response = await fetch(url)

                if (response.ok)
                    content = await response.text()
            } catch (err) {
                console.log(err)
                return
            }

            getHtml(content)


            function getHtml(content) {
                const startSearch = `(function(){for(var a=document.querySelectorAll(".gb_uc"),b=0;b<a.length;b++)_.Ld(_.wd,a[b],"click");_.pd.va().B.then(function(c){if(c){var d=_.N("gb_sc",c.C);d&&(d=new _.yh(d,_.M,_.vd),c.Ok(d))}})})();`
                const endSearch = '</script><div ng-non-bindable=""><div class="gb_vf">Pesquisa</div><div class="gb_xf">Limpar pesquisa</div><div class="gb_wf">'
                let currentPosition = content.indexOf(startSearch)

                if (currentPosition < 0) return
                detail = content.substr(currentPosition + (startSearch.length))
                currentPosition = detail.indexOf(endSearch)

                if (currentPosition < 0) return

                detail = detail.substr(0,
                    detail.length - (detail.length - currentPosition)
                )
                // console.log(detail)

                let splitHtml = detail.split('<div class="oD3fme" style="" jsname="vuEe0c" role="navigation" tabindex="0">')
                // console.log(splitHtml)

                splitHtml.forEach(data => {
                    getPodcastDetails(data)
                })

            }



        }
    }
    readHtml.getReadHtml()
})