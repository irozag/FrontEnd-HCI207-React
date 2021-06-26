import React from "react";


function Form() {
    return (
        <div>
            <form action="" class="validate" novalidate>
                <div class="list text-center">
                    <legend class="text-center">Επιλέξτε Παράσταση:</legend>
                    <select id="plays" class="form-select p-3" name="plays">
                        <option value="">--Παράσταση--</option>
                    </select>
                </div>
            </form>
        </div>
          );
} export default Form;