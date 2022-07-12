# En este ejercicio tenéis que crear una lista de RadioButton
# que muestre la opción que se ha seleccionado y que contenga
# un botón de reinicio para que deje todo como al principio.

# Al principio no tiene que haber una opción seleccionada.

import tkinter as tk
from tkinter import ttk

"""
Clase del frame principal
"""
class MainFrame(ttk.Frame):
    def __init__(self,container):
        super().__init__(container)
        self.browsers = ['Firefox','Chrome','Opera','Vivaldi','Netscape']

        self.titleLabel = ttk.Label(self,text = 'Elige un navegador: ').pack(fill='x',padx=5,pady=5)

        self.radioValue = tk.StringVar()           

        for el in self.browsers:
            opcion = ttk.Radiobutton(self,text=el,
            variable=self.radioValue, value=el)
            opcion.pack(fill='x')
        
        self.button = ttk.Button(self,text='Elegir',
        command=self.showResult)
        self.button.pack(fill='x',)

        self.resultLabel = tk.Label(self,text='Elegido: ')
        self.resultLabel.pack()
        
        self.pack()

    def showResult(self):
        textlbl = 'Elegido: '
        self.resultLabel.config(text=textlbl+self.radioValue.get())

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.geometry('400x200')
        self.resizable(False,False)


def main():
    app = App()
    frame = MainFrame(app)
    app.mainloop()

if __name__ == '__main__':
    main()