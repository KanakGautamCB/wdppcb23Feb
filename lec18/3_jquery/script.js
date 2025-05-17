$('body')
    .append(
        $('<input>')
        .attr('placeholder', 'Enter your input')
        .addClass('input-box')
    )
    .append(
        $('<button>add Task</button>')
        .click(()=>{
            const li=  $('<li></li>')
            const span= $('<span></span>').text($('.input-box').val())
            li.append(span)
            .append(
                $('<button>edit</button>')
                .click(()=>{
                    const editInputBox= $('<input>').val(span.text())
                    span.replaceWith(editInputBox)
                    editInputBox.focus()
                    editInputBox.blur(()=>{
                        span.text(editInputBox.val())
                        editInputBox.replaceWith(span)
                    })
                })
            )

            $('.movie-list').append(li)
            $('.input-box').val('')
        })
    )
    .append(
        $('<ul></ul>')
        .addClass('movie-list')
    )