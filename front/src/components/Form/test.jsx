import React from 'react'

export default function test() {
    return (
        <div>
            <div
                  className="btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  {/* cambiar el active del radio button con el click */}
                  <div
                    className="btn-group mr-3"
                    role="group"
                    aria-label="First group"
                  >
                    {/* <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleData}
                      value={500}
                    >
                      500 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary active"
                      onClick={handleData}
                      value={600}
                    >
                      600 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleData}
                      value={700}
                    >
                      700 ARS
                    </button> */}
                    {/* <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autocomplete="off"
                        checked
                      />
                      <label class="btn btn-outline-primary" for="btnradio1">
                        Radio 1
                      </label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autocomplete="off"
                      />
                      <label class="btn btn-outline-primary" for="btnradio2">
                        Radio 2
                      </label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autocomplete="off"
                      />
                      <label class="btn btn-outline-primary" for="btnradio3">
                        Radio 3
                      </label>
                    </div> */}
                  </div>
                  <div className="input-group">
                    <div className="input-group-text" id="btnGroupAddon">
                      ARS
                    </div>
                    <input
                      // limpiar el input cuando selecciono otro botón
                      name="amount"
                      type="text"
                      min="0"
                      minLength={2}
                      maxLength={5}
                      className="form-control"
                      onChange={handleData}
                      value={data.amount}
                      placeholder="Otro monto"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon"
                      style={{ width: 150 }}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label mt-3">Nombre</label>
                  <input
                    name="name"
                    type="text"
                    onChange={handleData}
                    value={data.name}
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">Apellido</label>
                  <input
                    name="lastname"
                    type="text"
                    onChange={handleData}
                    value={data.lastname}
                    className="form-control"
                    placeholder="Ingrese su apellido"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">Mail</label>
                  <input
                    name="email"
                    type="email"
                    onChange={handleData}
                    value={data.email}
                    className="form-control"
                    placeholder="Ingrese su mail"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    name="phone"
                    type="number"
                    onChange={handleData}
                    value={data.phone}
                    className="form-control"
                    placeholder="Ingrese su teléfono"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Continuar
                </button>
        </div>
    )
}
