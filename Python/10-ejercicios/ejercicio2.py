# En este segundo ejercicio, tendréis que crear una interfaz sencilla
# la cual debe de contener una lista de elementos seleccionables,
# también debe de tener un label con el texto que queráis.

import logging
from textwrap import fill
import tkinter as tk
from tkinter import MULTIPLE

# logging.basicConfig(level=logging.INFO)

class MainFrame(tk.Frame):
    def __init__(self,container):
        super().__init__(container)
        self.elementos = ['Uno','Dos','Tres','Cuatro']

        self.listbox=tk.Listbox(self,selectmode=MULTIPLE)
        for idx in range(len(self.elementos)):
            self.listbox.insert(idx,self.elementos[idx])

        self.listbox.grid(column=0,row=0,padx=10,pady=10)

        self.button=tk.Button(self,text='Aceptar',command=self.changeSelection)
        self.button.grid(column=0,row=1)

        self.selectLabel=tk.Label(self,text='')
        self.selectLabel.grid(column=0,row=2,padx=10,pady=5)
        
        self.grid(column=0,row=0)
    
    def changeSelection(self):
        resultado = ''
        for idx in self.listbox.curselection():
            # logging.info(self.listbox.get(idx))
            resultado += self.listbox.get(idx)+'\n' 
        self.selectLabel.config(text=resultado)

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        # self.geometry('400x200')
        self.resizable(False,False)

def main():
    app = App()
    frame = MainFrame(app)
    app.mainloop()

if __name__ == '__main__':
    main()