from curses import window
from xml.dom.minidom import Document


def contar():
    ini = Document.getElementById('txti')
    fim = Document.getElementById('txtf')
    passo = Document.getElementById('txtp')

    if len(ini) == 0 or len(fim) == 0 or len(passo) == 0 :
        window.alert('erro')
    else:
        print('ola')