import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  updateDoc,
  collection,
  Timestamp,
  getDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import Bulma from "@vizuaalog/bulmajs";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //Validacion campos obligatorios
    if (!name || !lastName || !email || !confirmationEmail || !phone) {
      setError("Se deben completar todos los campos.");
      return;
    } else if (email !== confirmationEmail) {
      setError("Los emails no coinciden.");
      return;
    } else {
      setError("");
    }

    if (cart) {
      const order = {
        buyer: {
          name: name,
          lastName: lastName,
          email: email,
          confirmationEmail: confirmationEmail,
          phone: phone,
        },
        items: cart.map((item) => {
          return {
            id: item.id,
            name: item.title,
            price: item.price,
            quantity: item.quantity,
          };
        }),
        total: parseFloat(total),
        date: Timestamp.fromDate(new Date()),
      };

      Promise.all(
        order.items.map(async (item) => {
          const itemRef = doc(db, "products", item.id);
          const itemDoc = await getDoc(itemRef);

          const realStock = itemDoc.data().stock;
          await updateDoc(itemRef, { stock: realStock - item.quantity });
        })
      )
        .then(() => {
          const ordersCollection = collection(db, "orders");
          addDoc(ordersCollection, order)
            .then((orderRef) => {
              setError("");
              setOrderId(orderRef.id);
              clearCart();

              Bulma().alert({
                type: "info",
                title: "Orden generada",
                body:
                  `Se ha generado la orden #<strong>${orderRef.id}</strong>` +
                  "<br>Muchas gracias por su compra.",
                confirm: {
                  label: "Ok",
                  classes: ["is-primary", "is-small"],
                },
              });
            })
            .catch((e) => {
              console.log("Error al generar la orden.");
              console.log(e);
            });
        })
        .catch((e) => {
          console.log("Error actualizar el stock.");
          console.log(e);
        });
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div>
          <section className="hero is-small">
            <div className="hero-body">
              <p className="title">
                <strong>Checkout</strong>
              </p>
            </div>
          </section>
        </div>
        <div className="columns is-vcenterd">
          <div className="column">
            <section className="hero is-small">
              <div className="hero-body">
                <p className="subtitle">
                  <strong> Datos personales</strong>
                </p>
                <div>
                  <div className="column">
                    <label className="label">Nombre</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        maxLength={20}
                        pattern={"[A-Za-z ]{1,20}"}
                        title={"Debes ingresar sólo letras."}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="column">
                    <label className="label">Apellido</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Apellido"
                        maxLength={20}
                        pattern={"[A-Za-z ]{1,20}"}
                        title={"Debes ingresar sólo letras."}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="column">
                    <label className="label">Teléfono</label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        placeholder="Teléfono"
                        min={1}
                        max={999999999999}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="column">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        maxLength={100}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="column">
                    <label className="label">Confirmar email </label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Confirmar email"
                        maxLength={100}
                        onChange={(e) => setConfirmationEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/*Error*/}
                  {error && (
                    <article className="message is-danger">
                      <div className="message-header">
                        <p>Error</p>
                      </div>
                      <div className="message-body">
                        <strong>{error}</strong>
                      </div>
                    </article>
                  )}
                </div>
              </div>
            </section>
          </div>

          <div className="column">
            <div className="container">
              <section className="hero is-small">
                <div className="hero-body">
                  <p className="subtitle">
                    <strong>Detalle de productos</strong>
                  </p>
                </div>
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="column">
                      <div className="card">
                        {/* Columna 1: Cantidad */}
                        <div className="card-content is-flex px-5 is-justify-content-space-between">
                          <div className="media-content px-4 is-flex is-align-items-flex-start">
                            <p>
                              <strong>{item.quantity}</strong>
                            </p>
                          </div>

                          {/* Columna 2: Título */}
                          <div
                            className="media-content px-4 is-flex is-align-items-flex-start"
                            style={{ width: "50rem" }}
                          >
                            <div>{item.title}</div>
                          </div>

                          {/* Columna 3: Precio unitario */}
                          <div className="media-content ml-auto px-6">
                            <p>${item.price}</p>
                          </div>

                          {/* Columna 4: Subtotal */}
                          <div className="media-content ml-auto px-6">
                            <p>${(item.quantity * item.price).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <section className="hero is-small">
                    <div className="hero-body">
                      <p className="subtitle">
                        <strong>Total: ${parseFloat(total).toFixed(2)}</strong>
                      </p>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>

        {cart.length > 0 ? (
          <button type="submit" className="button is-info mb-3">
            Crear orden
          </button>
        ) : (
          <div className="mb-3">
            <Link className="button is-info mb-3" to={"/"}>
              Volver
            </Link>
          </div>
        )}
      </form>
    </>
  );
};

export default Checkout;
